<script>
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
<svelte:head>
	<title>VatNotif - Home</title>
</svelte:head>

<h1>Hello and welcome to VatNotif!</h1>
<p>
	To get started, please login with your VATSIM account.
	<br />
	After that you can proceed to the dashboard and add some callsigns you'd like to receive notifications for.
	<br />
	You can also add Discord webhooks to receive notifications there.
</p>

<h1>Data Handling Policy</h1>
<p>
	At VatNotif, we take data privacy seriously and are committed to protecting your personal information. As such, we have implemented the following
	data handling policy:
</p>
<ol>
	<li>
		<strong>Unique Identifier:</strong> We only use a unique identifier (CID) from VATSIM to identify you. We do not store any other personal information.
	</li>
	<li>
		<strong>No Tracking/3rd Party Cookies:</strong> We do not use any tracking or 3rd party cookies. The only cookies we use are session cookies which
		are necessary for the website to function properly.
	</li>
	<li>
		<strong>Watched Callsigns and Notification Preferences:</strong> In our database, we only store your watched callsigns and notification preferences
		such as your Discord webhook URL. This information is used to provide you with real-time updates on your selected callsigns.
	</li>
	<li>
		<strong>Data Deletion:</strong> If you wish to have your data deleted, please send an email to
		<a href="mailto:kristian@kristn.co.uk">kristian@kristn.co.uk</a>. We will promptly delete all of your stored data upon receipt of your
		request.
	</li>
</ol>
<p>
	We hope that this policy provides you with peace of mind knowing that we are committed to protecting your personal information. If you have any
	questions or concerns, please do not hesitate to contact us.
</p>
<p>VatNotif</p>
