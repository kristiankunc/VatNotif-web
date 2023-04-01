<div class="navbar">
	<div class="navbar__title">
		<a href="/">VatNotif</a>
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

	.navbar__title a {
		color: #fff;
		font-weight: bold;
		text-decoration: none;
		font-size: 3rem;
		margin: 1rem;
	}

	.navbar__links {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.navbar__links a {
		color: #fff;
		margin: 1rem;
		font-size: 1.25rem;
		text-decoration: none;
		font-weight: bold;
	}
</style>
