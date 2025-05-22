import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({
            "response": {
                "text": "Привет! Это ответ от навыка.",
                "end_session": false
            },
            "version": "1.0",
            "session": {
                "session_id": "1234567890",
                "user_id": "user123",
                "message_id": 0
            }
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "error",
            code: 500,
            message: "Ошибка авторизации",
            error,
        })
    }
}