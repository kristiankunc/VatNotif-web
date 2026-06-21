<script lang="ts">
	import { isCallsign } from "$lib/callsign";
	import { showError } from "$lib/stores/error.svelte";

	let { data } = $props();

	let watchedCallsigns = $derived(data.watchedCallsigns);
	let searchQuery = $state("");

	let filteredCallsigns = $derived(
		searchQuery
			? watchedCallsigns.filter((c: { callsign: string }) =>
					c.callsign.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: watchedCallsigns
	);
</script>

<svelte:head>
	<title>Dashboard | VatNotif</title>
</svelte:head>

<div class="mx-auto min-h-[85vh] max-w-5xl px-4 py-10">
	<h1 class="text-3xl font-bold text-gray-900 ">Dashboard</h1>
	<p class="mt-1 text-sm text-gray-500 ">Manage your tracked callsigns and notification settings.</p>

	<div class="mt-8 grid gap-8 lg:grid-cols-3">
		
		<div class="lg:col-span-2">
			<div class="rounded-xl border border-gray-200 bg-white ">
				<div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-5 py-4 ">
					<h2 class="text-lg font-semibold text-gray-900 ">Tracked callsigns</h2>

					<form method="POST" action="?/addCallsign" class="flex gap-2">
						<input
							type="text"
							name="callsign"
							placeholder="EGKK_GND"
							class="focus-ring rounded-lg border border-gray-300 px-3 py-1.5 text-sm "
							maxlength="15"
							required
						/>
						<button
							type="submit"
							class="btn-press focus-ring inline-flex cursor-pointer items-center gap-1 rounded-lg bg-primary-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-primary-700"
						>
							<span class="material-symbols-outlined text-base">add</span>
							Add
						</button>
					</form>
				</div>

				
				{#if watchedCallsigns.length > 0}
					<div class="border-b border-gray-200 px-5 py-3 ">
						<input
							type="text"
							placeholder="Filter callsigns…"
							bind:value={searchQuery}
							class="focus-ring w-full rounded-lg border border-gray-200 px-3 py-1.5 text-sm "
						/>
					</div>
				{/if}

				
				<div class="divide-y divide-gray-100 ">
					{#if filteredCallsigns.length === 0}
						<div class="flex flex-col items-center px-5 py-12 text-center">
							<span class="material-symbols-outlined text-5xl text-gray-300 ">radio_button_unchecked</span>
							<p class="mt-3 font-medium text-gray-900 ">
								{searchQuery ? "No matching callsigns" : "No callsigns tracked yet"}
							</p>
							<p class="mt-1 text-sm text-gray-500 ">
								{searchQuery ? "Try a different search term." : "Enter a callsign above to start tracking."}
							</p>
						</div>
					{:else}
						{#each filteredCallsigns as callsign}
							<div class="flex items-center justify-between px-5 py-3">
								<div class="flex items-center gap-3">
									<span class="material-symbols-outlined text-base text-primary-500">radar</span>
									<code class="rounded-md bg-gray-100 px-2 py-1 font-mono text-sm font-medium text-gray-800 ">{callsign.callsign}</code>
								</div>
								<form method="POST" action="?/removeCallsign">
									<input type="hidden" name="callsign" value={callsign.callsign} />
									<button
										type="submit"
										class="btn-press focus-ring inline-flex cursor-pointer items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50 "
										aria-label="Remove {callsign.callsign}"
									>
										<span class="material-symbols-outlined text-base">delete</span>
										Remove
									</button>
								</form>
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>

		
		<div class="space-y-6">
			
			<div class="rounded-xl border border-gray-200 bg-white p-5 ">
				<h2 class="text-lg font-semibold text-gray-900 ">Notifications</h2>
				<div class="mt-3 flex items-center gap-2">
					<span
						class="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium {data.hasEmbedUrls
							? 'bg-green-50 text-green-700'
							: 'bg-yellow-50 text-yellow-700'}"
					>
						<span class="material-symbols-outlined text-sm">{data.hasEmbedUrls ? "check_circle" : "warning"}</span>
						{data.hasEmbedUrls ? "All embeds configured" : "Action needed"}
					</span>
				</div>
				<p class="mt-2 text-xs text-gray-500 ">
					{data.hasEmbedUrls
						? "All your embeds have a working webhook URL."
						: "Some of your embeds are missing a webhook URL."}
				</p>
				<a
					href="/embed"
					class="btn-press focus-ring mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
				>
					<span class="material-symbols-outlined text-base">rule_settings</span>
					Configure embeds
				</a>
			</div>
		</div>
	</div>
</div>
