<script lang="ts">
	import { writable } from "svelte/store";

	export let data;

	let callsignsStore = writable(data.watchedCallsigns);
</script>

<form method="POST" action="?/addCallsign" class="flex justify-center">
	<input type="text" name="callsign" id="callsign" placeholder="Callsign" class="m-2 rounded border border-gray-300 p-2" />
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
