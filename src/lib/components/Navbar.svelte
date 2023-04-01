<script lang="ts">
	import { onMount } from "svelte";

	let status = "API Status - Loading...";

	onMount(async () => {
		try {
			const res = await fetch("https://vatnotif-api.kristn.co.uk");
			if (res.ok) {
				status = "API Status - ✅";
			} else {
				status = `API Status - ❌ (${res.status})`;
			}
		} catch (e) {
			status = "API Status - ❌ (Offline)";
		}
	});
</script>

<div class="navbar">
	<div class="navbar__title">
		<a href="/">VatNotif</a>
	</div>

	<div class="navrar__api_status">
		<p contenteditable bind:innerHTML={status} />
	</div>
	<div class="navbar__links">
		<a href="/auth/login">Login</a>
		<a href="/auth/logout">Logout</a>
		<a href="/dashboard">Dashboard</a>
	</div>
</div>

<style>
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #1e1e1e;
	}

	.navbar a,
	.navbar p {
		margin: 1rem;
		color: #fff;
	}

	.navbar__title a {
		font-weight: bold;
		text-decoration: none;
		font-size: 3rem;
	}

	.navbar__links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.navbar__links a {
		font-size: 1.25rem;
		text-decoration: none;
		font-weight: bold;
	}
</style>
