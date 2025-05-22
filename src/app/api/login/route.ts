import { api } from "@/shared/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { login, password } = await request.json();

		const response = await api.post("/v1/auth/crm/authenticate", {
			login,
			password,
		});

		const token = response.data?.data?.user?.token;

		if (!token) {
			return NextResponse.json({
				status: "error",
				code: 400,
				message: "Неправильные логин или пароль",
				error: response.data,
			});
		}

        const cookieStore = await cookies();
        cookieStore.set("session-token", token);

		return NextResponse.json({
			status: "success",
			code: 200,
			message: "Авторизация успешна",
			data: true,
		});
	} catch (error) {
		return NextResponse.json({
			status: "error",
			code: 500,
			message: "Ошибка авторизации",
			error,
		});
	}
}
