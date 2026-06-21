<script lang="ts">
	import { page } from "$app/state";
	import { signIn, signOut } from "@auth/sveltekit/client";

	let menuOpen = $state(false);
</script>

<nav class="sticky top-0 z-40 border-b border-gray-200 bg-white">
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
		<a href="/" class="flex items-center gap-2">
			<img src="/logo.webp" alt="VatNotif logo" class="h-7 w-7" />
			<span class="text-lg font-bold text-gray-900">VatNotif</span>
		</a>

		
		<div class="hidden items-center gap-2 md:flex">
			{#if page.data.session?.user}
				<span class="text-sm text-gray-600">{page.data.session.user.name}</span>
				<a href="/dashboard"
					class="rounded bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-primary-700">Dashboard</a>
				<button
					onclick={() => signOut({ redirectTo: '/' })}
					class="cursor-pointer rounded px-3 py-1.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100">Sign out</button>
			{:else}
				<button
					onclick={() => signIn("vatsim")}
					class="cursor-pointer rounded bg-accent-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-accent-700">Sign in with VATSIM</button>
			{/if}
		</div>

		
		<div class="md:hidden">
			<button
				onclick={() => (menuOpen = true)}
				class="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-gray-600"
				aria-label="Open menu"
			>
				<span class="material-symbols-outlined text-lg">menu</span>
			</button>
		</div>
	</div>
</nav>


{#if menuOpen}
	<div class="fixed inset-0 z-50 bg-black/40 md:hidden" onclick={() => (menuOpen = false)}></div>
	<div class="fixed inset-y-0 right-0 z-50 flex w-64 flex-col bg-white shadow-lg">
		<div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
			<span class="font-semibold text-gray-900">Menu</span>
			<button
				onclick={() => (menuOpen = false)}
				class="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-gray-500 hover:bg-gray-100"
				aria-label="Close menu"
			>
				<span class="material-symbols-outlined">close</span>
			</button>
		</div>

		<div class="flex-1 px-3 py-4">
			{#if page.data.session?.user}
				<p class="mb-3 px-2 text-sm font-medium text-gray-900">{page.data.session.user.name}</p>
				<a href="/dashboard" onclick={() => (menuOpen = false)}
					class="mb-1 block rounded px-2 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
				<button
					onclick={() => signOut({ redirectTo: '/' })}
					class="block w-full cursor-pointer rounded px-2 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
			{:else}
				<button
					onclick={() => signIn("vatsim")}
					class="w-full cursor-pointer rounded bg-accent-600 px-3 py-2 text-sm font-medium text-white hover:bg-accent-700">Sign in with VATSIM</button>
			{/if}
		</div>
	</div>
{/if}
