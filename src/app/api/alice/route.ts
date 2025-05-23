import { prisma } from "@/shared/lib/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Получение событий
		const events = await prisma.events.findMany();

		// Запись адреса в события
		events.forEach(async (event) => {
			const addressResponse = await axios
				.get(`https://geocode-maps.yandex.ru/1.x/?`, {
					params: {
						format: "json",
						geocode: `${event.coordinate_one},${event.coordinate_two}`,
						kind: "house",
						results: "1",
						apikey: process.env.YANDEX_MAP_API,
					},
				})
				.catch();
			const address = addressResponse.data.response.GeoObjectCollection.featureMember[0];
			event.address = address;
		});

		// Извлекаем параметры из запроса
		const city = body.request.nlu?.entities?.find((e: any) => e.type === "YANDEX.GEO")?.value
			?.city;
		const datetime = body.request.nlu?.entities?.find((e: any) => e.type === "YANDEX.DATETIME");

		// Фильтруем мероприятия по городу и дате
		let filteredEvents = events?.filter((event) => {
			const matchesDate = event.start_date && event.start_date >= datetime?.value;
			return matchesDate;
		});

		// Если не нашли по точной дате, пробуем искать по дням недели
		// if (filteredEvents.length === 0 && datetime?.value) {
		// 	filteredEvents = mockEvents.filter(
		// 		(event) => event.city.toLowerCase() === city?.toLowerCase()
		// 	);
		// }

		// Если все равно не нашли, берем случайные для указанного города
		// if (filteredEvents.length === 0 && city) {
		// 	filteredEvents = mockEvents.filter(
		// 		(event) => event.city.toLowerCase() === city.toLowerCase()
		// 	);
		// }

		// Если совсем ничего не нашли, берем все
		// if (filteredEvents.length === 0) {
		// 	filteredEvents = [...mockEvents];
		// }

		// Выбираем до 5 мероприятий
		const resultEvents = filteredEvents.slice(0, 5);

		// Формируем ответ в зависимости от наличия мероприятий
		let responseText, responseTTS;

		if (resultEvents.length > 0) {
			const cityPart = city ? ` в ${city}` : "";
			const datePart = datetime ? ` на ${datetime.value}` : "";

			responseText =
				`Вот мероприятия${cityPart}${datePart}:\n` +
				resultEvents
					.map(
						(event, index) =>
							`${index + 1}. ${event.title}. ${event.start_date} в ${event.address}.`
					)
					.join("\n");

			responseTTS =
				`Я нашла ${resultEvents.length} мероприятий${cityPart}${datePart}. ` +
				resultEvents.map((event) => `${event.title} ${event.start_date}`).join(". ") +
				". Хотите узнать подробнее о каком-то из них?";
		} else {
			responseText = "К сожалению, не нашлось мероприятий по вашему запросу";
			responseTTS = "Извините, я не нашла мероприятий по вашему запросу";
		}

		const response = {
			response: {
				text: responseText,
				tts: responseTTS,
				end_session: false,
			},
			version: body.version,
			session: body.session,
		};

		return NextResponse.json(response, {
			headers: {
				"Content-Type": "application/json",
			},
			status: 200,
		});
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				response: {
					text: "Произошла ошибка при поиске мероприятий",
					tts: "Извините, я не смогла найти мероприятия",
					end_session: true,
				},
				version: "1.0",
				session: {},
			},
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}
