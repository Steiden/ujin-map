import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({
            status: "success",
            code: 200,
            data: {
                items: ["Новость 1", "Новость 2", "Новость 3"]
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