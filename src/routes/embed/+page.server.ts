import { validateFormData } from "$lib/form";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { prisma } from "$lib/prisma";
import { embedToJSON } from "$lib/discord-embeds";

export const actions = {
	updateembed: async ({ request, locals }) => {
		if ((await locals.auth())?.user.cid) return fail(401, { message: "Unauthorized" });

		const form = await request.formData();

		const isValid = validateFormData(form, [
			{ key: "author", type: "string", maxLength: 80 },
			{ key: "title", type: "string", maxLength: 256 },
			{ key: "text", type: "string", maxLength: 4096 },
			{ key: "color", type: "string", maxLength: 7 },
			{ key: "avatar", type: "string", maxLength: 256 }
		]);

		if (!isValid) return fail(400, { message: "Invalid form data" });

		const cid = locals.session.user.cid;
		const json = await embedToJSON({
			author: form.get("author") as string,
			title: form.get("title") as string,
			text: form.get("text") as string,
			color: form.get("color") as string,
			avatar: form.get("avatar") as string
		});

		const res = await fetch(``, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: json
		});

		console.log(res);
	}
} satisfies Actions;
