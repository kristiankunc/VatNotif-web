<script lang="ts">
	import "$lib/app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Error, { showError } from "$lib/components/Error.svelte";
	import Footer from "$lib/components/Footer.svelte";

	onMount(() => {
		if ($page.form?.message) {
			showError("Error", $page.form.message);
		}
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>

	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />

	<script defer data-domain="vatnotif.kristn.co.uk" src="https://plausible.kristn.co.uk/js/script.js"></script>

	<meta name="description" content="VATSIM callsign tracker" />
	<meta name="keywords" content="VATSIM, controller, tracker, aviation" />
	<meta name="author" content="Kristián Kunc" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="theme-color" content="#ffffff" />
	<meta property="og:title" content="VatNotif" />
	<meta property="og:description" content="Free VATSIM controller tracker" />
	<meta property="og:image" content="https://vatnotif.kristn.co.uk/brand/logo.webp" />
	<meta property="og:url" content="https://vatnotif.kristn.co.uk/" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="VatNotif" />
	<meta name="twitter:description" content="Free VATSIM controller tracker" />
	<meta name="twitter:image" content="https://vatnotif.kristn.co.uk/brand/logo.webp" />
</svelte:head>

<Navbar />
<Error />
<main>
	<slot />
</main>
<Footer />
