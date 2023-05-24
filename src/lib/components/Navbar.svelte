<script>
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	let status = "API Status - Loading...";
	let isLoggedIn = writable(false);

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

	// check if user has session cookie
	// wait for onMount to run
	onMount(() => {
		isLoggedIn.set(document.cookie.includes("session="));
	});
</script>

<div class="navbar">
	<div class="box navbar__title">
		<span>
			<a href="/">VatNotif</a>
		</span>
	</div>

	<div class="box navbar__api_status">
		<span>
			{status}
		</span>
	</div>
	<div class="box navbar__links">
		<span>
			{#if !$isLoggedIn}
				<a href="/auth/login">Login</a>
			{:else}
				<a href="/auth/logout">Logout</a>
				<a href="/dashboard">Dashboard</a>
			{/if}
		</span>
	</div>
</div>

<style>
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		background-color: #1e1e1e;
	}

	.navbar * {
		color: #fff;
		margin-inline: 0;
	}

	.box {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.box:first-child > span {
		margin-right: auto;
	}

	.box:last-child > span {
		margin-left: auto;
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
		margin-inline: 1rem;
		font-size: 1.25rem;
		text-decoration: none;
		font-weight: bold;
	}
</style>
