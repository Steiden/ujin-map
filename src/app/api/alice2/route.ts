// import { NextRequest, NextResponse } from "next/server";

// type SessionState = {
// 	step: string;
// 	selectedCategory?: string;
// 	selectedDate?: string;
// 	filteredEvents?: Event[];
// };

// export default async function handler(req: NextRequest, res: NextResponse) {
// 	const { body } = await req.json();
// 	const sessionState: SessionState = body.state.session || { step: "initial" };

// 	// Обработка кнопок
// 	const command = body.request.command;
// 	const payload = body.request.payload; // Данные из кнопок

// 	switch (sessionState.step) {
// 		case "initial":
// 			return handleInitialStep(sessionState);
// 		case "select_category":
// 			return handleCategoryStep(command, payload, sessionState);
// 		case "select_date":
// 			return handleDateStep(command, payload, sessionState);
// 		case "confirm":
// 			return handleConfirmationStep(command, payload, sessionState);
// 		default:
// 			return handleReset(sessionState);
// 	}
// }

// // Обработчик первого шага
// const handleInitialStep = (state: SessionState) => {
// 	const response = {
// 		text: "Добро пожаловать! Выберите действие:",
// 		buttons: [
// 			{ title: "Выбрать категорию", payload: { action: "select_category" }, hide: true },
// 			{ title: "Случайное мероприятие", payload: { action: "random_event" }, hide: true },
// 		],
// 		session_state: { ...state, step: "select_category" },
// 	};

// 	return NextResponse.json(buildAliceResponse(response));
// };

// // Обработчик выбора категории
// const handleCategoryStep = (command: string, payload: any, state: SessionState) => {
// 	if (payload?.action === "select_category") {
// 		const categories = ["Концерты", "Выставки", "Театры", "Фестивали"];

// 		return NextResponse.json(
// 			buildAliceResponse({
// 				text: "Выберите категорию:",
// 				buttons: categories.map((cat) => ({
// 					title: cat,
// 					payload: { action: "set_category", category: cat },
// 					hide: true,
// 				})),
// 				session_state: { ...state, step: "select_date" },
// 			})
// 		);
// 	}

// 	// Обработка выбранной категории
// 	if (payload?.action === "set_category") {
// 		return NextResponse.json(
// 			buildAliceResponse({
// 				text: `Выбрана категория: ${payload.category}. Теперь выберите дату:`,
// 				buttons: [
// 					{
// 						title: "Сегодня",
// 						payload: { action: "set_date", date: "today" },
// 						hide: true,
// 					},
// 					{
// 						title: "Завтра",
// 						payload: { action: "set_date", date: "tomorrow" },
// 						hide: true,
// 					},
// 					{
// 						title: "Выходные",
// 						payload: { action: "set_date", date: "weekend" },
// 						hide: true,
// 					},
// 				],
// 				session_state: {
// 					...state,
// 					step: "confirm",
// 					selectedCategory: payload.category,
// 				},
// 			})
// 		);
// 	}
// };

// // Шаблон для построения ответа
// const buildAliceResponse = (config: {
// 	text: string;
// 	buttons?: any[];
// 	session_state: SessionState;
// }) => {
// 	return {
// 		version: "1.0",
// 		session_state: config.session_state,
// 		response: {
// 			text: config.text,
// 			tts: config.text,
// 			buttons: config.buttons || [],
// 			end_session: false,
// 		},
// 	};
// };

// // Обработчик шага выбора даты
// const handleDateStep = (command: string, payload: any, state: SessionState): NextResponse => {
// 	// Обработка нажатия кнопки с датой
// 	if (payload?.action === "set_date") {
// 		const dateMapping: { [key: string]: string } = {
// 			today: getFormattedDate(0),
// 			tomorrow: getFormattedDate(1),
// 			weekend: getNextWeekendDate(),
// 		};

// 		const selectedDate = dateMapping[payload.date] || payload.date;

// 		return NextResponse.json(
// 			buildAliceResponse({
// 				text: `Выбрана дата: ${selectedDate}. Ищем мероприятия в категории "${state.selectedCategory}"...`,
// 				session_state: {
// 					...state,
// 					step: "confirm",
// 					selectedDate: selectedDate,
// 				},
// 			})
// 		);
// 	}

// 	// Обработка текстового ввода даты
// 	if (body.request.nlu?.entities) {
// 		const dateEntity = body.request.nlu.entities.find((e: any) => e.type === "YANDEX.DATETIME");
// 		if (dateEntity) {
// 			return handleDateStep("", { action: "set_date", date: dateEntity.value }, state);
// 		}
// 	}

// 	// Если дата не распознана
// 	return NextResponse.json(
// 		buildAliceResponse({
// 			text: "Не удалось распознать дату. Попробуйте еще раз:",
// 			buttons: [
// 				{ title: "Сегодня", payload: { action: "set_date", date: "today" }, hide: true },
// 				{ title: "Завтра", payload: { action: "set_date", date: "tomorrow" }, hide: true },
// 				{ title: "Выходные", payload: { action: "set_date", date: "weekend" }, hide: true },
// 			],
// 			session_state: state,
// 		})
// 	);
// };

// // Обработчик шага подтверждения
// const handleConfirmationStep = (
// 	command: string,
// 	payload: any,
// 	state: SessionState
// ): NextResponse => {
// 	// Фильтрация мероприятий
// 	const filteredEvents = mockEvents.filter((event) => {
// 		const categoryMatch = event.category === state.selectedCategory?.toLowerCase();
// 		const dateMatch = event.date === state.selectedDate;
// 		return categoryMatch && dateMatch;
// 	});

// 	// Если нет мероприятий
// 	if (filteredEvents.length === 0) {
// 		return NextResponse.json(
// 			buildAliceResponse({
// 				text: `Не найдено мероприятий в категории "${state.selectedCategory}" на ${state.selectedDate}. Хотите попробовать другую дату?`,
// 				buttons: [
// 					{ title: "Да", payload: { action: "change_date" }, hide: true },
// 					{ title: "Нет", payload: { action: "restart" }, hide: true },
// 				],
// 				session_state: state,
// 			})
// 		);
// 	}

// 	// Показ результатов
// 	return NextResponse.json(
// 		buildAliceResponse({
// 			text: `Найдено ${filteredEvents.length} мероприятий:\n${formatEvents(filteredEvents)}`,
// 			buttons: [
// 				{ title: "Показать ещё", payload: { action: "show_more" }, hide: true },
// 				{ title: "Новый поиск", payload: { action: "restart" }, hide: true },
// 				{ title: "Сохранить", payload: { action: "save_results" }, hide: true },
// 			],
// 			session_state: {
// 				...state,
// 				step: "results",
// 				filteredEvents: filteredEvents,
// 			},
// 		})
// 	);
// };

// // Сброс состояния
// const handleReset = (state: SessionState): NextResponse => {
// 	return NextResponse.json(
// 		buildAliceResponse({
// 			text: "Хотите начать новый поиск?",
// 			buttons: [
// 				{ title: "Да", payload: { action: "restart" }, hide: true },
// 				{ title: "Нет", payload: { action: "exit" }, hide: true },
// 			],
// 			session_state: {
// 				step: "initial",
// 				selectedCategory: undefined,
// 				selectedDate: undefined,
// 				filteredEvents: undefined,
// 			},
// 		})
// 	);
// };

// // Вспомогательные функции
// const getFormattedDate = (daysToAdd: number): string => {
// 	const date = new Date();
// 	date.setDate(date.getDate() + daysToAdd);
// 	return date.toLocaleDateString("ru-RU", {
// 		day: "numeric",
// 		month: "long",
// 		weekday: "short",
// 	});
// };

// const getNextWeekendDate = (): string => {
// 	const today = new Date();
// 	const dayOfWeek = today.getDay();
// 	const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
// 	const saturday = new Date(today);
// 	saturday.setDate(today.getDate() + daysUntilSaturday);

// 	return `${saturday.toLocaleDateString("ru-RU", {
// 		day: "numeric",
// 		month: "long",
// 	})} - Воскресенье`;
// };

// const formatEvents = (events: Event[]): string => {
// 	return events
// 		.map(
// 			(event, index) => `${index + 1}. ${event.title}\n🗓 ${event.date}\n📍 ${event.location}`
// 		)
// 		.join("\n\n");
// };
