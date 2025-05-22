import { NextRequest, NextResponse } from "next/server";

// Моковые данные мероприятий с добавлением городов
const mockEvents = [
	{
		title: "Концерт джазового оркестра",
		date: "15 июня, 19:00",
		location: "Парк культуры",
		city: "Пермь",
		description: "Вечер живой джазовой музыки под открытым небом",
	},
	{
		title: "Выставка современного искусства",
		date: "10-20 июня",
		location: "Галерея 'Арт-пространство'",
		city: "Москва",
		description: "Работы молодых художников-авангардистов",
	},
	{
		title: "Фестиваль уличной еды",
		date: "12-14 июня",
		location: "Центральная площадь",
		city: "Пермь",
		description: "Гастрономические деликатесы со всего мира",
	},
	{
		title: "Мастер-класс по живописи",
		date: "завтра, 15:00", // Пример для тестирования
		location: "Художественная школа №3",
		city: "Пермь",
		description: "Рисование акварелью для начинающих",
	},
	{
		title: "Кинопоказ под открытым небом",
		date: "20 июня, 21:30",
		location: "Набережная реки",
		city: "Санкт-Петербург",
		description: "Классика мирового кинематографа",
	},
	{
		title: "Литературный вечер",
		date: "завтра, 18:00", // Пример для тестирования
		location: "Городская библиотека",
		city: "Пермь",
		description: "Чтение произведений современных авторов",
	},
	{
		title: "Спортивный марафон",
		date: "25 июня, 09:00",
		location: "Главный стадион",
		city: "Пермь",
		description: "Бег на 5 и 10 км для всех желающих",
	},
];

// Функция для нормализации даты (упрощенная версия)
const normalizeDate = (dateStr: string) => {
	const today = new Date();
	const tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	if (dateStr.includes("завтра")) {
		return tomorrow.toISOString().split("T")[0];
	}
	// Здесь можно добавить обработку других форматов дат
	return dateStr;
};

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Извлекаем параметры из запроса
		const city = body.request.nlu?.entities?.find((e: any) => e.type === "YANDEX.GEO")?.value
			?.city;
		const datetime = body.request.nlu?.entities?.find((e: any) => e.type === "YANDEX.DATETIME");

		// Фильтруем мероприятия по городу и дате
		let filteredEvents = mockEvents.filter((event) => {
			const matchesCity = !city || event.city.toLowerCase() === city.toLowerCase();
			const matchesDate =
				!datetime ||
				normalizeDate(event.date.toLowerCase()).includes(
					normalizeDate(datetime.value).toLowerCase()
				);
			return matchesCity && matchesDate;
		});

		// Если не нашли по точной дате, пробуем искать по дням недели
		if (filteredEvents.length === 0 && datetime?.value) {
			filteredEvents = mockEvents.filter(
				(event) => event.city.toLowerCase() === city?.toLowerCase()
			);
		}

		// Если все равно не нашли, берем случайные для указанного города
		if (filteredEvents.length === 0 && city) {
			filteredEvents = mockEvents.filter(
				(event) => event.city.toLowerCase() === city.toLowerCase()
			);
		}

		// Если совсем ничего не нашли, берем все
		if (filteredEvents.length === 0) {
			filteredEvents = [...mockEvents];
		}

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
							`${index + 1}. ${event.title}. ${event.date} в ${event.location}. ${
								event.description
							}`
					)
					.join("\n");

			responseTTS =
				`Я нашла ${resultEvents.length} мероприятий${cityPart}${datePart}. ` +
				resultEvents.map((event) => `${event.title} ${event.date}`).join(". ") +
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
