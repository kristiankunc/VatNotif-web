import { auth } from "$lib/auth";
import { sequence } from "@sveltejs/kit/hooks";

export const handle = sequence(auth.handle);
