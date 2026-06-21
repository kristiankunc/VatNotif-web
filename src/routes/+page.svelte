<script lang="ts">
	import { page } from "$app/state";
	import { signIn } from "@auth/sveltekit/client";
</script>

<svelte:head>
	<title>VatNotif — VATSIM Controller Callsign Tracker</title>
</svelte:head>


<section class="bg-gradient-to-br from-primary-900 to-primary-800 px-4 py-20 text-center text-white">
	<div class="mx-auto max-w-3xl">
		<img src="/logo.webp" alt="VatNotif logo" class="mx-auto h-24 w-24" />
		<h1 class="mt-4 text-5xl font-bold md:text-6xl">VatNotif</h1>
		<p class="mt-2 text-lg text-primary-200">Track VATSIM controller callsigns and get notified when they log on or off.</p>

		<div class="mt-6 flex flex-wrap justify-center gap-3">
			{#if page.data.session?.user}
				<a href="/dashboard" class="inline-block rounded bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-700">Go to Dashboard</a>
			{:else}
				<button
					onclick={() => signIn("vatsim")}
					class="cursor-pointer rounded bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-700">Sign in with VATSIM</button>
			{/if}
			<a href="#how-it-works" class="inline-block rounded bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-100">How does it work</a>
		</div>
	</div>
</section>


<section id="how-it-works" class="bg-white py-24 ">
	<div class="mx-auto max-w-6xl px-4">
		<h2 class="text-center text-3xl font-bold text-gray-900 md:text-4xl">How does it work</h2>
		<p class="mt-2 text-center text-gray-500 ">Three simple steps to start tracking</p>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			
			<div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center ">
				<div class="mx-auto flex h-12 w-12 items-center justify-center text-primary-600">
					<span class="material-symbols-outlined text-2xl">travel_explore</span>
				</div>
				<h3 class="mt-3 text-lg font-semibold text-gray-900 ">Find positions</h3>
				<p class="mt-1 text-sm text-gray-500 ">Find airports and positions you're interested in using VATSIM mapping tools.</p>
			</div>

			
			<div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center ">
				<div class="mx-auto flex h-12 w-12 items-center justify-center text-primary-600">
					<span class="material-symbols-outlined text-2xl">sell</span>
				</div>
				<h3 class="mt-3 text-lg font-semibold text-gray-900 ">Track callsigns</h3>
				<p class="mt-1 text-sm text-gray-500 ">Add their callsign to your tracking list — supports wildcards.</p>
			</div>

			
			<div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center ">
				<div class="mx-auto flex h-12 w-12 items-center justify-center text-primary-600">
					<span class="material-symbols-outlined text-2xl">notifications_active</span>
				</div>
				<h3 class="mt-3 text-lg font-semibold text-gray-900 ">Get notified</h3>
				<p class="mt-1 text-sm text-gray-500 ">Receive Discord notifications whenever they come online or go offline.</p>
			</div>
		</div>

		
		<div class="mx-auto mt-12 max-w-2xl rounded-lg border border-gray-200 bg-gray-50 p-6 ">
			<h3 class="flex items-center gap-2 text-lg font-semibold text-gray-900 ">
				<span class="material-symbols-outlined text-primary-500">rocket_launch</span>
				Quick start
			</h3>
			<p class="mt-2 text-sm text-gray-600 ">
				After signing in, default logon &amp; logoff notifications are created automatically. Just add a
				<a href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">Discord webhook URL</a>
				and you're all set. You can create as many embeds as you like and customise them using variables like <code class="rounded bg-gray-200 px-1 py-0.5 font-mono text-xs ">{`{callsign}`}</code>.
			</p>
		</div>
	</div>
</section>


<section class="bg-white py-24 ">
	<div class="mx-auto max-w-3xl px-4">
		<h2 class="text-center text-3xl font-bold text-gray-900 md:text-4xl">Frequently asked questions</h2>

		<div class="mt-12 space-y-3">
			<details class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 transition hover:border-gray-300 ">
				<summary class="flex items-center justify-between px-5 py-4 text-base font-semibold text-gray-900 ">
					How to find a callsign
					<span class="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
				</summary>
				<div class="px-5 pb-4 text-sm text-gray-600 ">
					Controllers on VATSIM log on under a callsign. Use mapping tools such as
					<a href="https://vatsim-radar.com/" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">VATSIM Radar</a>
					or <a href="https://vatspy.rosscarlson.dev/" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">VAT-Spy</a>
					to find the callsign of the controller you're interested in.
				</div>
			</details>

			<details class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 transition hover:border-gray-300 ">
				<summary class="flex items-center justify-between px-5 py-4 text-base font-semibold text-gray-900 ">
					How to use wildcards
					<span class="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
				</summary>
				<div class="px-5 pb-4 text-sm text-gray-600 ">
					The percent sign (<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">%</code>) matches any number of characters. For example,
					<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">EGLL_%</code> tracks all positions at London Heathrow — from Ground
					(<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">EGLL_1_GND</code>) to Radar (<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">EGLL_N_APP</code>).
				</div>
			</details>

			<details class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 transition hover:border-gray-300 ">
				<summary class="flex items-center justify-between px-5 py-4 text-base font-semibold text-gray-900 ">
					How to use variables
					<span class="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
				</summary>
				<div class="px-5 pb-4 text-sm text-gray-600 ">
					Four variables are available: <code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">{`{name}`}</code>,
					<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">{`{cid}`}</code>,
					<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">{`{callsign}`}</code> &amp;
					<code class="rounded bg-gray-200 px-1 py-0.5 font-mono ">{`{frequency}`}</code>.
					They must be inside curly braces and can be used in the embed text and title.
				</div>
			</details>

			<details class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 transition hover:border-gray-300 ">
				<summary class="flex items-center justify-between px-5 py-4 text-base font-semibold text-gray-900 ">
					How to create a Discord webhook
					<span class="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
				</summary>
				<div class="px-5 pb-4 text-sm text-gray-600 ">
					Follow the official Discord guide:
					<a href="https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">Intro to Webhooks</a>.
				</div>
			</details>

			<details class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 transition hover:border-gray-300 ">
				<summary class="flex items-center justify-between px-5 py-4 text-base font-semibold text-gray-900 ">
					Is this project open-source?
					<span class="material-symbols-outlined text-gray-400 transition group-open:rotate-180">expand_more</span>
				</summary>
				<div class="px-5 pb-4 text-sm text-gray-600 ">
					Yes! You can find both
					<a href="https://github.com/kristiankunc/VatNotif-web" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">this website</a>
					and the <a href="https://github.com/kristiankunc/VatNotif-api" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">API</a>
					on GitHub.
				</div>
			</details>
		</div>
	</div>
</section>


<section class="bg-gray-50 py-24 ">
	<div class="mx-auto max-w-3xl px-4">
		<div class="rounded-xl border border-gray-200 bg-white p-8 ">
			<h2 class="flex items-center gap-2 text-2xl font-bold text-gray-900 ">
				<span class="material-symbols-outlined text-accent-500">favorite</span>
				Support the project
			</h2>
			<p class="mt-2 text-sm text-gray-600 ">
				Everything is built in free time and the infrastructure comes out of my own pocket.
				100% of donations go towards covering server costs.
			</p>
			<a href="https://ko-fi.com/kristiankunc" target="_blank" class="btn-press focus-ring mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-700">
				<span class="material-symbols-outlined text-lg">local_cafe</span>
				Support on Ko-fi
			</a>
		</div>

		<details class="group mt-8 cursor-pointer">
			<summary class="flex items-center justify-between text-sm font-medium text-gray-500 hover:text-gray-700 ">
				Legal &amp; Privacy
				<span class="material-symbols-outlined text-base transition group-open:rotate-180">expand_more</span>
			</summary>
			<div class="mt-4 space-y-4 text-sm text-gray-600 ">
				<div>
					<h4 class="font-semibold text-gray-900 ">Your data</h4>
					<p>The only personal data stored by default is your unique VATSIM CID. Additional data (such as webhook URLs) is stored based on your preferences.</p>
				</div>
				<div>
					<h4 class="font-semibold text-gray-900 ">Cookies</h4>
					<p>Third-party cookies, including <a href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">Cloudflare cookies</a>, are used to ensure smooth operation.</p>
				</div>
				<div>
					<h4 class="font-semibold text-gray-900 ">Data deletion</h4>
					<p>I will promptly delete your data upon request. Contact me via <a href="https://github.com/kristiankunc" target="_blank" class="font-medium text-primary-600 underline-offset-2 hover:underline ">GitHub</a>.</p>
				</div>
			</div>
		</details>
	</div>
</section>
