import { api } from "@/shared/api";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const authReponse = await api.post("/v1/auth/crm/authenticate", {
			login: "hakathon2025-11@ujin.tech",
			password: "honivefo",
		});

		const token = authReponse.data?.data?.user?.token;

		if (!token) {
			return NextResponse.json({
				status: "error",
				code: 403,
				message: "Вы не авторизованы",
			});
		}
		const response = await api.get("/auth/get-user", {
			params: {
				token,
				eg: "20cb236a-7d5c-4bf0-976d-6961b57e429c",
				egt: "9",
			},
		});

		return NextResponse.json({
			status: "success",
			code: 200,
			message: "Информация пользователя",
			data: response.data?.data,
		});
	} catch (error) {
		return NextResponse.json({
			status: "error",
			code: 500,
			message: "Ошибка получения списка интересов",
			error,
		});
	}
}
