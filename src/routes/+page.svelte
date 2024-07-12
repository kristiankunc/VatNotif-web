<svelte:head>
	<title>VatNotif</title>
</svelte:head>

<div class="flex min-h-[90vh] w-full flex-row flex-wrap justify-evenly">
	<div class="flex flex-col items-center justify-center">
		<h1 class="m-5 text-6xl font-semibold">VatNotif</h1>
		<div>
			<img src="/logo.webp" alt="VatNotif logo" class="h-20 w-20" />
		</div>
	</div>

	<div class="flex flex-col justify-center">
		<div class="mx-4 my-8 flex items-center justify-center">
			<div
				class="w-full rounded-lg bg-white p-10 shadow-2xl shadow-blue-500/50 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-700/70"
			>
				<h1 class="flex items-center justify-start text-2xl font-bold">
					<span class="material-symbols-outlined mr-2"> travel_explore </span>
					Find positions
				</h1>
				<p class="mt-4 text-gray-600">Find airports and positions you are interested in!</p>
			</div>
		</div>
		<div class="mx-4 my-8 flex items-center justify-center">
			<div
				class="w-full rounded-lg bg-white p-10 shadow-2xl shadow-blue-500/50 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-700/70"
			>
				<h1 class="flex items-center justify-start text-2xl font-bold">
					<span class="material-symbols-outlined mr-2"> sell </span>
					Get callsign
				</h1>
				<p class="mt-4 text-gray-600">Get their callsign and add them to your tracking list!</p>
			</div>
		</div>
		<div class="mx-4 my-8 flex items-center justify-center">
			<div
				class="w-full rounded-lg bg-white p-10 shadow-2xl shadow-blue-500/50 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-700/70"
			>
				<h1 class="flex items-center justify-start text-2xl font-bold">
					<span class="material-symbols-outlined mr-2"> notifications_active </span>
					Receive notifications
				</h1>
				<p class="mt-4 text-gray-600">Receive a notification via Discord whenever they come online!</p>
			</div>
		</div>
	</div>
</div>

<div class="w-ull m-auto flex flex-col items-start justify-center p-4 md:w-3/4 xl:w-1/2">
	<h2 class="w-full text-center text-3xl font-bold">Frequently asked questions</h2>
	<details class="my-2 w-full rounded-lg bg-slate-100 px-2 py-4 shadow">
		<summary class="cursor-pointer text-xl font-semibold text-gray-700 transition-colors hover:text-primary-500">What is VatNotif?</summary>
		<p class="p-4">VatNotif is a service that allows you to receive notifications when a specific VATSIM callsign comes online.</p>
	</details>
	<details class="my-2 w-full rounded-lg bg-slate-100 px-2 py-4 shadow">
		<summary class="cursor-pointer text-xl font-semibold text-gray-700 transition-colors hover:text-primary-500">How to find a callsign</summary>
		<p class="p-4">
			Controllers on VATSIM log on under a callsign, you can use mapping tools such as
			<a class="text-blue-500 underline hover:text-blue-700" href="https://simaware.ca/" target="_blank">SimAware</a>
			or <a class="text-blue-500 underline hover:text-blue-700" href="https://vatspy.rosscarlson.dev/" target="_blank">VAT-Spy</a>
			to find the callsign of the controller you are interested in.
		</p>
	</details>
	<details class="my-2 w-full rounded-lg bg-slate-100 px-2 py-4 shadow">
		<summary class="cursor-pointer text-xl font-semibold text-gray-700 transition-colors hover:text-primary-500">How to use wildcards</summary>
		<p class="p-4">
			A wild card in the form of percent sign (%) can be used to match any number of characters. For example, if you want to track all positions at
			London Heathrow, you can use the wildcard EGLL_% and all positions from Ground (EGLL_1_GND) up to Radar (EGLL_N_APP) will be tracked.
		</p>
	</details>
	<details class="my-2 w-full rounded-lg bg-slate-100 px-2 py-4 shadow">
		<summary class="cursor-pointer text-xl font-semibold text-gray-700 transition-colors hover:text-primary-500">How to use variables</summary>
		<p class="p-4">
			A total of four variables are allowed: name, cid, callsign & frequency and they must be inside curly braces. For example, &#123callsign&#125 is
			going to be rendered as EGKK_GND. They can be used in the embed text and title.
		</p>
	</details>
	<details class="my-2 w-full rounded-lg bg-slate-100 px-2 py-4 shadow">
		<summary class="cursor-pointer text-xl font-semibold text-gray-700 transition-colors hover:text-primary-500"
			>How to create a Discord webhook</summary
		>
		<p class="p-4">
			To receive notifications, you need to create a Discord webhook by following the instructions
			<a
				class="text-blue-500 underline hover:text-blue-700"
				href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"
				target="_blank">here</a
			>.
		</p>
	</details>
</div>
<div class="w-ull m-auto flex flex-col items-start justify-center p-4 md:w-3/4 xl:w-1/2">
	<h2 class="w-full text-center text-3xl font-bold">Privacy policy</h2>
	<h3 class="mt-4 text-2xl font-semibold">Your data</h3>
	<p>The only personal data stored by default is your unique VATSIM CID. Other data may be stored based on user preference & settings.</p>
	<h3 class="mt-4 text-2xl font-semibold">Cookies</h3>
	<p>
		Third party cokies, including, but not limited to <a
			class="text-blue-500 underline hover:text-blue-700"
			href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
			target="_blank">Cloudflare cookies,</a
		>
		are used on the site to ensure smooth operations
	</p>
	<h3 class="mt-4 text-2xl font-semibold">Privacy settings</h3>
	<p>
		If you wish for your CID to be ignored when you log on, such as that no notification about your presence will be sent, you can allow your CID to
		be ignored in the dashboard.
	</p>
	<h3 class="mt-4 text-2xl font-semibold">Data deletion</h3>
	<p>
		I will promptly delete your data upon request. To do so, contact
		<a class="text-blue-500 underline hover:text-blue-700" href="mailto:kristian@kristn.co.uk">kristian &ltat&gt kristn.co.uk</a>
		for further assistance.
	</p>
</div>
