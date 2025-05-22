import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { login, password } = await request.json();

        const response = await axios.post()
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