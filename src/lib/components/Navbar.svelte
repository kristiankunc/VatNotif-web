<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	let status = "API Status - Loading...";
	let isLoggedIn = writable(false);

	onMount(async () => {
		try {
			const [apiRes, loginRes] = await Promise.all([fetch("https://api.vatnotif.kristn.co.uk"), fetch("/auth/check", { method: "POST" })]);

			if (apiRes.ok) {
				status = "API Status - ✅";
			} else {
				status = `API Status - ❌ (${apiRes.status})`;
			}

			if (loginRes.ok) {
				isLoggedIn.set(true);
			} else {
				isLoggedIn.set(false);
			}
		} catch (e) {
			status = "API Status - ❌ (Offline)";
		}
	});
</script>

<div class="navbar">
	<div class="box navbar__title">
		<span>
			<a href="/">
				<img src="/brand/logo.webp" alt="logo" />
				<nobr>VatNotif</nobr>
			</a>
		</span>
	</div>

	<div class="box navbar__api_status">
		<span>
			{status}
		</span>
	</div>
	<div class="box navbar__links">
		<span>
			{#if $isLoggedIn}
				<a href="/auth/logout">Logout</a>
				<a href="/dashboard">Dashboard</a>
			{:else}
				<a href="/auth/login">Login</a>
			{/if}
		</span>
	</div>
</div>

<style>
	img {
		max-width: 40px;
	}
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

	/* Mobile */
	@media (max-width: 768px) {
		.navbar {
			flex-direction: column;
		}

		.box {
			margin: 10px;
		}
	}
</style>
