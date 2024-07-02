<script lang="ts">
	import { writable } from "svelte/store";

	export let data;

	let callsignsStore = writable(data.watchedCallsigns);
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="m-2 text-4xl font-semibold">Dashboard</h1>
	<h2 class="m-2 text-2xl font-semibold">Tracked callsigns</h2>

	<form method="POST" action="?/addCallsign" class="flex justify-center">
		<input
			type="text"
			name="callsign"
			id="callsign"
			placeholder="EGKK_GND"
			class="m-2 rounded border border-gray-300 p-2"
			required
			pattern="^[A-Z]{(2, 4)}((_|-)[A-Z0-9_]{(0, 2)})?_?(CTR|APP|DEP|TWR|GND|DEL|TMU|FSS|RMP|FIS|FMP|AFIS)$"
			maxlength="15"
		/>
		<button type="submit" class="m-2 rounded bg-primary-500 p-4 text-white transition duration-150 ease-in-out hover:bg-primary-600">
			Add callsign
		</button>
	</form>

	{#each $callsignsStore as callsign}
		<div class="flex items-center justify-center">
			<p class="m-2">{callsign.callsign}</p>
			<input class="m-2" type="checkbox" name="callsign" value={callsign.topdown} disabled />
			<form method="POST" action="?/removeCallsign" class="flex justify-center">
				<input type="hidden" name="callsign" value={callsign.callsign} />
				<input
					type="submit"
					value="Remove"
					class="m-2 rounded bg-primary-500 p-4 text-white transition duration-150 ease-in-out hover:bg-primary-600"
				/>
			</form>
		</div>
	{/each}

	<h2 class="m-2 text-2xl font-semibold">Discord notifications</h2>

	<p><b>Logon embed</b>: {data.embedConfig.up ? "configured" : "not configured"} & {data.embedStatus.up ? "enabled" : "disabled"}</p>
	<p><b>Logoff embed</b>: {data.embedConfig.down ? "configured" : "not configured"} & {data.embedStatus.down ? "enabled" : "disabled"}</p>

	<h2 class="m-2 text-2xl font-semibold">Privacy settings</h2>
</div>
