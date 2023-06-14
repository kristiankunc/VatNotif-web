<script lang="ts">
	import "../styles/navbar.css";
	export let isLoggedIn: boolean;
	export let apiStatus: boolean;
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
			API Status - {apiStatus ? "✅" : "❌"}
		</span>
	</div>
	<div class="box navbar__links">
		<span>
			{#if isLoggedIn}
				<a href="/auth/logout">Logout</a>
				<a href="/dashboard">Dashboard</a>
			{:else}
				<a href="/auth/login">Login</a>
			{/if}
		</span>
	</div>
</div>
