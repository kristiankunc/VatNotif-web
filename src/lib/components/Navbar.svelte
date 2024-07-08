<script lang="ts">
	import { page } from "$app/stores";
	import { signIn, signOut } from "@auth/sveltekit/client";
</script>

<nav class="flex max-h-[10vh] flex-wrap justify-between bg-primary-600 p-4 text-white">
	<div class="flex items-center justify-center text-3xl font-semibold">
		<a class="flex items-center" href="/">
			<img src="/logo.webp" alt="VatNotif logo" class="mr-2 h-10 w-10" />
			<h2>VatNotif</h2>
		</a>
	</div>
	<div class="flex flex-wrap items-center justify-center">
		{#if $page.data.session?.user}
			<p class="px-3 text-2xl font-semibold">{$page.data.session.user.name}</p>
			<a href="/dashboard" class="p-2">
				<button
					class="flex rounded bg-secondary-600 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-secondary-700
				"
				>
					<span class="material-symbols-outlined mr-2">settings</span>
					<p>Dashboard</p></button
				>
			</a>
			<button
				class="flex items-center rounded bg-primary-300 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-primary-400"
				on:click={() => signOut()}
			>
				<span class="material-symbols-outlined mr-2">logout</span>
				<p>Sign out</p>
			</button>
		{:else}
			<button
				class="flex rounded bg-accent-500 px-4 py-2 text-white transition duration-150 ease-in-out hover:bg-accent-700"
				on:click={() => signIn("vatsim")}
			>
				<span class="material-symbols-outlined mr-2"> login </span>
				<p>Sign in with VATSIM</p>
			</button>
		{/if}
	</div>
</nav>
