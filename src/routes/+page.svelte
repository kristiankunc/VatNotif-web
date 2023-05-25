<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import "../lib/styles/index.css";
	import Layout from "./+layout.svelte";
</script>

<Navbar />
<svelte:head>
	<title>VatNotif - Home</title>
</svelte:head>
<div class="main-div">
	<div class="section-heading introduction-heading">
		<h2>How to use?</h2>
	</div>

	<div class="section introduction-div">
		<div class="card">
			<img src="/cards/explore.svg" alt="Avatar" style="width:100%" />
			<div class="card-contents-div">
				<h4><b>Find</b></h4>
				<p>Find airports and positions you are interested in!</p>
			</div>
		</div>
		<div class="card">
			<img src="/cards/compass.svg" alt="Avatar" style="width:100%" />
			<div class="card-contents-div">
				<h4><b>Track</b></h4>
				<p>Get their callsign and add them to your tracking list!</p>
			</div>
		</div>
		<div class="card">
			<img src="/cards/notification.svg" alt="Avatar" style="width:100%" />
			<div class="card-contents-div">
				<h4><b>Notify</b></h4>
				<p>Receive a notification once they come online!</p>
			</div>
		</div>
	</div>

	<div class="section-heading introduction-heading">
		<h2>Getting Started</h2>
	</div>

	<div class="section">
		<p>
			To get started, please login with your VATSIM account.
			<br />
			After that you can proceed to the <a href="/dashboard">Dashboard</a> and add some callsigns you'd like to receive notifications for.
			<br />
			You can also add Discord webhooks to receive notifications on your discord servers.
		</p>
	</div>

	<div class="section-heading introduction-heading">
		<h2>Notification</h2>
	</div>

	<div class="section">
		<h3>Discord webhook</h3>
		<p>
			You can receive notifications via a Discord webhook, to learn more about webhooks on Discord, read <a
				href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
				>this article. Once you're ready, paste the webhook URl into your dashboard and you're ready to go</a
			>
		</p>
	</div>

	<div class="section-heading introduction-heading">
		<h2>FAQ</h2>
	</div>

	<div class="section faq">
		<h3>What is VatNotif?</h3>
		<p>VatNotif is a VATSIM notification service that allows you to receive notifications when your favourite controllers come online.</p>

		<h3>How does it work?</h3>
		<p>
			VatNotif uses the VATSIM API to fetch the latest data on controllers and their positions. <br />It then compares this data with your
			preferences and sends you a notification if a match is found.
		</p>

		<h3>Is the service paid?</h3>
		<p>
			No, VatNotif is completely free to use.<br />If you'd like to support the project, you can donate to the developer
			<a href="https://paypal.me/kristn1">here</a>.
		</p>

		<h3>Is this project open-source?</h3>
		<p>
			Yes, the project is open-source and can be found on GitHub:
			<br />
			Web -
			<a href="https://github.com/kristiankunc/VatNotif-web">VatNotif-web</a>
			<br />
			API -
			<a href="https://github.com/kristiankunc/VatNotif-api">VatNotif-api</a>
		</p>
	</div>

	<div class="section-heading">
		<h2>Data Handling Policy</h2>
	</div>

	<div class="section data-handling">
		<p>
			At VatNotif, we take data privacy seriously and are committed to protecting your personal information. As such, we have implemented the
			following data handling policy:
		</p>
		<br />
		<ol>
			<li>
				<strong>Unique Identifier:</strong> We only use a unique identifier (CID) from VATSIM to identify you. We do not store any other personal
				information.
			</li>
			<li>
				<strong>No Tracking/3rd Party Cookies:</strong> We do not use any tracking or 3rd party cookies. The only cookies we use are session cookies
				which are necessary for the website to function properly.
			</li>
			<li>
				<strong>Watched Callsigns and Notification Preferences:</strong> In our database, we only store your watched callsigns and notification
				preferences such as your Discord webhook URL. This information is used to provide you with real-time updates on your selected callsigns.
			</li>
			<li>
				<strong>Data Deletion:</strong> If you wish to have your data deleted, please send an email to
				<a href="mailto:kristian@kristn.co.uk">kristian@kristn.co.uk</a> We will promptly delete all of your stored data upon receipt of your request.
			</li>
		</ol>
		<br />
		<p>
			<i>
				We hope that this policy provides you with peace of mind knowing that we are committed to protecting your personal information.
				<br />
				If you have any questions or concerns, please do not hesitate to contact us.
			</i>
		</p>
	</div>
</div>
