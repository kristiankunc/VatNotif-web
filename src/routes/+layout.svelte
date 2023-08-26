<script lang="ts">
	import "../lib/styles/global.css";
	import Navbar from "../lib/components/Navbar.svelte";
	import { browser } from "$app/environment";

	export let data;
</script>

{#if browser}
	<script defer data-domain="vatnotif.kristn.co.uk" src="https://plausible.kristn.co.uk/js/script.js"></script>
	<script>
		console.log("plausible loaded");
	</script>
{/if}

<Navbar isLoggedIn={data.isLoggedIn} apiStatus={data.apiStatus} />
<slot />
