import { NextRequest, NextResponse } from "next/server";

// Моковые данные мероприятий
const mockEvents = [
  {
    title: "Концерт джазового оркестра",
    date: "15 июня, 19:00",
    location: "Парк культуры",
    description: "Вечер живой джазовой музыки под открытым небом"
  },
  {
    title: "Выставка современного искусства",
    date: "10-20 июня",
    location: "Галерея 'Арт-пространство'",
    description: "Работы молодых художников-авангардистов"
  },
  {
    title: "Фестиваль уличной еды",
    date: "12-14 июня",
    location: "Центральная площадь",
    description: "Гастрономические деликатесы со всего мира"
  },
  {
    title: "Мастер-класс по живописи",
    date: "18 июня, 15:00",
    location: "Художественная школа №3",
    description: "Рисование акварелью для начинающих"
  },
  {
    title: "Кинопоказ под открытым небом",
    date: "20 июня, 21:30",
    location: "Набережная реки",
    description: "Классика мирового кинематографа"
  },
  {
    title: "Литературный вечер",
    date: "22 июня, 18:00",
    location: "Городская библиотека",
    description: "Чтение произведений современных авторов"
  },
  {
    title: "Спортивный марафон",
    date: "25 июня, 09:00",
    location: "Главный стадион",
    description: "Бег на 5 и 10 км для всех желающих"
  }
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Выбираем 5 случайных мероприятий
    const randomEvents = [...mockEvents]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    
    // Формируем текстовый ответ
    const eventsText = randomEvents.map((event, index) => 
      `${index + 1}. ${event.title}. ${event.date} в ${event.location}. ${event.description}`
    ).join('\n');

    // Формируем короткую версию для TTS (озвучки)
    const eventsTTS = randomEvents.map(event => 
      `${event.title} ${event.date}`
    ).join('. ');

    const response = {
      response: {
        text: `Вот 5 случайных мероприятий:\n${eventsText}`,
        tts: `Я нашла несколько мероприятий. ${eventsTTS}. Хотите узнать подробнее о каком-то из них?`,
        end_session: false,
        buttons: [
          {
            title: "Все мероприятия",
            url: "https://ujin-pdf.vercel.app",
            hide: false
          },
          {
            title: "Помощь",
            payload: {
              command: "help"
            },
            hide: true
          }
        ]
      },
      version: body.version,
      session: body.session
    };

    return NextResponse.json(response, {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 200
    });

  } catch (error) {
    return NextResponse.json(
      {
        response: {
          text: "Произошла ошибка при получении мероприятий",
          tts: "Извините, я не смогла загрузить список мероприятий",
          end_session: true
        },
        version: "1.0",
        session: {}
      },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}