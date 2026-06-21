<script lang="ts">
	import { page } from "$app/state";
	import { signIn } from "@auth/sveltekit/client";
</script>

<svelte:head>
	<title>Error {page.status} | VatNotif</title>
</svelte:head>

<div class="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4">
	
	<span
		class="absolute select-none text-[16rem] font-black leading-none text-gray-100 "
		aria-hidden="true"
	>{page.status}</span
	>

	<div class="relative z-10 flex flex-col items-center text-center">
		<span class="material-symbols-outlined text-6xl text-red-400">
			{page.status === 404 ? "search_off" : page.status === 401 || page.status === 403 ? "lock" : "error"}
		</span>
		<h1 class="mt-4 text-3xl font-bold text-gray-900 ">
			{page.status === 404 ? "Page not found" : page.status === 401 ? "Unauthorized" : page.status === 403 ? "Forbidden" : "Something went wrong"}
		</h1>
		<p class="mt-2 max-w-md text-gray-500 ">
			{page.status === 404
				? "The page you're looking for doesn't exist."
				: page.status === 401 || page.status === 403
					? "You need to sign in to access this page."
					: page.error?.message || "An unexpected error occurred."}
		</p>

		<div class="mt-8 flex flex-wrap justify-center gap-3">
			{#if page.status === 401 || page.status === 403}
				<button
					onclick={() => signIn("vatsim")}
					class="btn-press focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl bg-accent-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-700"
				>
					<span class="material-symbols-outlined text-lg">login</span>
					Sign in with VATSIM
				</button>
			{/if}
			<a
				href="/"
				class="btn-press focus-ring inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 "
			>
				<span class="material-symbols-outlined text-lg">home</span>
				Go home
			</a>
		</div>
	</div>
</div>
