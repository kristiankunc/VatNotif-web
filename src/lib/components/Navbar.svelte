<script lang="ts">
	import { page } from "$app/stores";
	import { signIn, signOut } from "@auth/sveltekit/client";
</script>

<nav class="flex justify-between bg-primary-600 p-4 text-white">
	<div class="flex items-center text-2xl font-semibold">
		<a href="/">
			<h2>VatNotif</h2>
		</a>
	</div>
	<div class="flex items-center">
		{#if $page.data.session?.user}
			<p class="pr-2">{$page.data.session.user.name}</p>
			<button class="rounded bg-primary-300 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-primary-400" on:click={() => signOut()}
				>Sign out</button
			>
			<a href="/dashboard" class="pl-2">
				<button
					class="rounded bg-secondary-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-secondary-700
				">Dashboard</button
				>
			</a>
		{:else}
			<button
				class="rounded bg-accent-500 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-accent-700"
				on:click={() => signIn("vatsim")}>Sign in with VATSIM</button
			>
		{/if}
	</div>
</nav>
