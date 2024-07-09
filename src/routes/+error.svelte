<script lang="ts">
	import { page } from "$app/stores";
	import { signIn } from "@auth/sveltekit/client";
</script>

<div class="flex h-[90vh] flex-col items-center justify-center">
	<h1 class="text-center text-2xl font-semibold">Error {$page.status}: {$page?.error?.message}</h1>
	{#if $page.status === 401 || $page.status === 403}
		<button
			class="mt-4 flex rounded bg-accent-500 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-accent-700"
			on:click={() => signIn("vatsim")}
		>
			<span class="material-symbols-outlined mr-2">login</span>
			<p>Sign in with VATSIM</p>
		</button>
	{/if}

	<a href="/">
		<button class="mt-2 flex rounded bg-primary-500 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-primary-600">
			<span class="material-symbols-outlined mr-2">home</span>
			<p>Go back home</p>
		</button>
	</a>
</div>
