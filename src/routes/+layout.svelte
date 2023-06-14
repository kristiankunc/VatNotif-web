<script lang="ts">
	import "../lib/styles/global.css";
	import Navbar from "../lib/components/Navbar.svelte";

	export let data;
</script>

<Navbar isLoggedIn={data.isLoggedIn} apiStatus={data.apiStatus} />
<slot />
