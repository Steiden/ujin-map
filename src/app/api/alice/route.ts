import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type Event = {
	id: number;
	title: string;
	start_date: Date;
	end_date: Date;
	coordinate_one: number;
	coordinate_two: number;
	direction: string;
	executor: string;
	participants_count: number;
	interests: number[];
	address?: string;
};

// Парсинг YANDEX.DATETIME
const parseYandexDateTime = (entity: any): { start: Date; end?: Date } => {
	const value = entity.value;
	if (value.year) {
		return {
			start: new Date(value.year, value.month - 1, value.day || 1),
			end: value.day ? undefined : new Date(value.year, value.month, 0),
		};
	}
	if (entity.datetime) {
		return {
			start: new Date(entity.datetime),
			end: entity.datetime_to ? new Date(entity.datetime_to) : undefined,
		};
	}
	return { start: new Date() };
};

// Фильтрация по дате
const filterByDate = (event: Event, dateFilter: { start: Date; end?: Date }) => {
	const eventDate = new Date(event.start_date);
	const startOfDay = new Date(dateFilter.start);
	startOfDay.setHours(0, 0, 0, 0);

	if (!dateFilter.end) {
		return eventDate.toDateString() === startOfDay.toDateString();
	}

	const endOfDay = new Date(dateFilter.end);
	endOfDay.setHours(23, 59, 59, 999);

	return eventDate >= startOfDay && eventDate <= endOfDay;
};

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Получение событий
		const response = await axios.get("https://sinfully-tops-possum.cloudpub.ru/events");
		const events: Event[] = response.data;

		// Проверка skill_id
		const YANDEX_SKILL_ID = process.env.YANDEX_SKILL_ID;
		if (body.session?.skill_id !== YANDEX_SKILL_ID) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
		}

		// Извлечение параметров
		const geoEntity = body.request.nlu?.entities?.find((e: any) => e.type === "YANDEX.GEO");
		const datetimeEntity = body.request.nlu?.entities?.find(
			(e: any) => e.type === "YANDEX.DATETIME"
		);

		// Приоритет города из запроса, по умолчанию Пермь
		const city = geoEntity?.value?.city || "Пермь";
		const dateFilter = datetimeEntity ? parseYandexDateTime(datetimeEntity) : null;

		// Фильтрация
		let filteredEvents = events.filter((event) => {
			const dateMatch = dateFilter ? filterByDate(event, dateFilter) : true;
			return dateMatch;
		});

		// Сортировка по дате
		filteredEvents.sort((a, b) => +a.start_date - +b.start_date);

		// Форматирование ответа
		const formatDate = (dateStr: string) => {
			const date = new Date(dateStr);
			return date.toLocaleDateString("ru-RU", {
				day: "numeric",
				month: "long",
				weekday: "short",
			});
		};

		const responseEvents = filteredEvents.slice(0, 5);

		// Получение адреса
		responseEvents.forEach(async (event) => {
			const addressResponse = await axios.get(`https://geocode-maps.yandex.ru/1.x/?`, {
				params: {
					format: "json",
					geocode: `${event.coordinate_one},${event.coordinate_two}`,
					kind: "house",
					results: "1",
					apikey: process.env.YANDEX_MAP_API,
				},
			});
			const address = addressResponse.data.response.GeoObjectCollection.featureMember[0];
			event.address = address;
		});

		// Генерация текста
		let responseText = "";
		if (responseEvents.length > 0) {
			responseText =
				`В ${city} найдено ${responseEvents.length} мероприятий:\n\n` +
				responseEvents
					.map(
						(e, i) =>
							`${i + 1}. ${e.title}\n🗓 ${e.start_date}\n📍 ${e.address}\n${
								e.executor
							}`
					)
					.join("\n\n");
		} else {
			responseText = `К сожалению, в ${city} нет мероприятий по вашему запросу`;
		}

		// TTS оптимизация
		const responseTTS =
			responseEvents.length > 0
				? `В ${city} я нашла ${responseEvents.length} мероприятий. ` +
				  responseEvents
						.map((e) => `${e.title}. ${e.start_date}. ${e.address}`)
						.join(". ") +
				  ". Хотите узнать подробности?"
				: `В ${city} нет мероприятий по вашему запросу`;

		return NextResponse.json({
			response: {
				text: responseText,
				tts: responseTTS,
				end_session: false,
				buttons: [
					{ title: "Сегодня", hide: true },
					{ title: "Завтра", hide: true },
					{ title: "Концерты", hide: true },
				],
			},
			version: body.version,
			session_state: {
				lastCity: city,
				lastDateFilter: dateFilter,
			},
		});
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				response: {
					text: "Произошла ошибка при поиске мероприятий",
					tts: "Извините, я не смогла обработать ваш запрос",
					end_session: true,
				},
				version: "1.0",
			},
			{ status: 500 }
		);
	}
}
