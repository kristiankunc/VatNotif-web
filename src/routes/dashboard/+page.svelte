<script lang="ts">
	import { enhance } from "$app/forms";
	import { isCallsign } from "$lib/callsign";
	import { writable } from "svelte/store";

	export let data;

	let callsignsStore = writable(data.watchedCallsigns);

	const isIgnored = writable(data.isIgnored);
	const hasEnabledEmbeds = writable(data.embedStatus.up && data.embedStatus.down);
</script>

<svelte:head>
	<title>VatNotif | Dashboard</title>
</svelte:head>

<h1 class="m-2 text-center text-4xl font-semibold">Dashboard</h1>

<div class="flex flex-row flex-wrap items-start justify-evenly">
	<div class="m-4 flex flex-col items-center justify-center">
		<h2 class="mb-2 text-2xl font-semibold">Discord notifications</h2>

		<p><b>Logon embed</b>: {data.embedConfig.up ? "configured" : "not configured"} & {data.embedStatus.up ? "enabled" : "disabled"}</p>
		<p><b>Logoff embed</b>: {data.embedConfig.down ? "configured" : "not configured"} & {data.embedStatus.down ? "enabled" : "disabled"}</p>

		<div class="flex flex-row items-center justify-center">
			<a href="/embed">
				<button class="m-2 flex rounded bg-primary-500 p-4 text-white transition duration-150 ease-in-out hover:bg-primary-600">
					<span class="material-symbols-outlined mr-2">rule_settings</span>
					<p>Configure embeds</p></button
				>
			</a>
			<button
				type="submit"
				class="m-2 flex rounded bg-primary-500 p-4 text-white transition duration-150 ease-in-out hover:bg-primary-600"
				on:click={async () => {
					document.body.style.cursor = "wait";
					const res = await fetch("/api/notify", {
						method: $hasEnabledEmbeds ? "DELETE" : "POST"
					});

					if (!res.ok) {
						alert("Failed to update notification settings");
					}

					$hasEnabledEmbeds = !$hasEnabledEmbeds;
					document.body.style.cursor = "default";
				}}
			>
				<span class="material-symbols-outlined mr-2"> {$hasEnabledEmbeds ? "notifications_active" : "notifications_off"} </span>
				<p>{$hasEnabledEmbeds ? "Enable" : "Disable"}</p>
			</button>
		</div>
	</div>
	<div class="m-4 flex flex-col items-center justify-center">
		<h2 class="mb-2 text-2xl font-semibold">Tracked callsigns</h2>

		<form
			method="POST"
			action="?/addCallsign"
			class="flex justify-center"
			use:enhance={({ formElement, formData, action, cancel, submitter }) => {
				// TODO: fix this sketchy enhancer
				// TS fuckery
				const callsign = String(formData.get("callsign"));

				if (!isCallsign(callsign)) {
					cancel();
					// TODO: Error component
					alert("Invalid callsign");
					return;
				}

				if ($callsignsStore.find((c) => c.callsign === callsign)) {
					cancel();
					// TODO: Error component
					alert("Callsign already added");
					return;
				}

				return async ({ result, update }) => {
					update();
					window.location.reload();
				};
			}}
		>
			<input
				type="text"
				name="callsign"
				id="callsign"
				placeholder="EGKK_GND"
				class="m-2 rounded border border-gray-300 p-2"
				maxlength="15"
				required
			/>
			<button type="submit" class="m-2 flex rounded bg-primary-500 p-4 text-white transition duration-150 ease-in-out hover:bg-primary-600">
				<span class="material-symbols-outlined mr-2">add</span>
				<p>Add callsign</p>
			</button>
		</form>

		{#each $callsignsStore as callsign}
			<div class="flex items-center justify-center">
				<p class="m-2">{callsign.callsign}</p>
				<input class="m-2" type="checkbox" name="callsign" value={callsign.topdown} disabled />
				<form method="POST" action="?/removeCallsign" class="flex justify-center">
					<input type="hidden" name="callsign" value={callsign.callsign} />
					<button type="submit" class="m-2 flex rounded bg-secondary-700 p-4 text-white transition duration-150 ease-in-out hover:bg-secondary-800">
						<span class="material-symbols-outlined mr-2">cancel</span>
						<p>Remove</p>
					</button>
				</form>
			</div>
		{/each}
	</div>
	<div class="m-4 flex flex-col items-center justify-center">
		<h2 class="mb-2 text-2xl font-semibold">Privacy settings</h2>
		<label class="me-5 inline-flex cursor-pointer content-center items-center justify-center">
			<input
				type="checkbox"
				class="peer sr-only"
				bind:checked={$isIgnored}
				on:change={async () => {
					document.body.style.cursor = "wait";
					const res = await fetch("/api/ignore", {
						method: $isIgnored ? "POST" : "DELETE"
					});

					if (!res.ok) {
						$isIgnored = !$isIgnored;
						// TODO: Error component
						alert("Failed to update privacy settings");
					}

					document.body.style.cursor = "default";
				}}
			/>
			<div
				class="peer-focus:ring-4rtl:peer-checked:after:-translate-x-full peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-green-500"
			></div>
		</label>

		<p class="mt-2">Your CID currently <b>{$isIgnored ? "can't" : "can"}</b> be watched by other using VatNotif</p>
	</div>
</div>
