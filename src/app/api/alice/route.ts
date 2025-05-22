import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Получаем тело запроса от Алисы
    
    // Формируем ответ, сохраняя session и version из запроса
    const response = {
      response: {
        text: "Привет! Это ответ от навыка.",
        tts: "Привет! Это ответ от навыка.", // Добавляем озвучку
        end_session: false,
        buttons: [] // Можно добавить кнопки при необходимости
      },
      version: body.version, // Важно: используем version из запроса
      session: body.session  // Важно: используем session из запроса
    };

    return NextResponse.json(response, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Ошибка обработки запроса",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}