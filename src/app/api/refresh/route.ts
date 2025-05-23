import axios from "axios";
import { NextResponse } from "next/server";
import { prisma } from "@/shared/lib/prisma";
import { events, interests } from "../../../../generated/prisma";

export async function GET() {
	try {
		const eventsResponse = await axios
			.get("https://sinfully-tops-possum.cloudpub.ru/events")
			.catch();
		const events: events[] = eventsResponse.data;

		events.forEach(async (event) => {
			await prisma.events.create({
				data: event,
			});
		});

		const interestsResponse = await axios
			.get("https://sinfully-tops-possum.cloudpub.ru/interests")
			.catch();
		const interests: interests[] = interestsResponse.data;

		interests.forEach(async (interest) => {
			await prisma.interests.create({
				data: interest,
			});
		});

		// const interestsResponse = await axios
		// 	.get("https://sinfully-tops-possum.cloudpub.ru/")
		// 	.catch();
		// const interests: interests[] = interestsResponse.data;

		// interests.forEach(async (interest) => {
		// 	await prisma.interests.create({
		// 		data: interest,
		// 	});
		// });

		return NextResponse.json({
			status: "success",
			code: 200,
			message: "Данные успешно обновлены",
		});
	} catch (error) {
		return NextResponse.json({
			status: "error",
			code: 500,
			message: "Ошибка обновления данных",
		});
	}
}
