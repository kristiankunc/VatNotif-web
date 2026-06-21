<script lang="ts">
	import ColorPicker from "svelte-awesome-color-picker";
	import { showError } from "$lib/stores/error.svelte";
	import { addToast } from "$lib/stores/toast.svelte";
	import { mdToText, mdToTitle } from "$lib/string-format.js";

	let { data } = $props();

	let currentEmbedId = $state(data.embeds[0].id);
	let currentData = $state({ ...data.embeds[0] });
	let currentTimeStr = $state(getTimeStr());
	let isTesting = $state(false);

	let isDownNotification = $derived(currentData.event === "down");

	// Cached preview HTML
	let previewTitle = $state("");
	let previewText = $state("");

	$effect(() => {
		currentData.title;
		mdToTitle(currentData.title).then((html) => { previewTitle = html; });
	});

	$effect(() => {
		currentData.text;
		mdToText(currentData.text).then((html) => { previewText = html; });
	});

	$effect(() => {
		const id = currentEmbedId;
		if (id === -1) {
			currentData = {
				id: -1,
				url: "",
				avatar: "",
				name: "",
				title: "",
				color: "#5865f2",
				text: "",
				author: "",
				event: "up"
			};
		} else {
			const embed = data.embeds.find((e: { id: number }) => e.id === id);
			if (embed) currentData = { ...embed };
		}
	});

	$effect(() => {
		const interval = setInterval(() => {
			currentTimeStr = getTimeStr();
		}, 60000);
		return () => clearInterval(interval);
	});

	$effect(() => {
		if (typeof window !== "undefined") {
			document.documentElement.style.setProperty("--dynamic-color", currentData.color);
		}
	});

	function getTimeStr(): string {
		const date = new Date();
		return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: false });
	}

	function getServerData() {
		return data.embeds.find((embed: { id: number }) => embed.id === currentData.id) || data.embeds[0];
	}

	async function testWebhook() {
		if (!currentData.url) {
			showError("No webhook URL", "Please enter a webhook URL before testing.");
			return;
		}
		isTesting = true;
		try {
			const res = await fetch(currentData.url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					content: null,
					embeds: [
						{
							title: "VatNotif Test",
							description: "**John Doe** (123456) has just logged on as **EGKK_GND** (121.805).",
							color: 0x0e92f1,
							author: { name: "VatNotif", icon_url: "https://vatnotif.kristn.co.uk/logo.webp" },
							footer: { text: "This is a test notification" },
							timestamp: new Date().toISOString()
						}
					],
					attachments: []
				})
			});
			if (res.ok) {
				addToast("Test notification sent successfully!", "success");
			} else {
				showError("Test failed", `Discord returned ${res.status}: ${res.statusText}`);
			}
		} catch (err) {
			showError("Test failed", "Could not reach Discord. Check the webhook URL.");
		} finally {
			isTesting = false;
		}
	}
</script>

<svelte:head>
	<title>Embed Configuration — VatNotif</title>
</svelte:head>

<div class="flex min-h-[85vh] w-full flex-col lg:flex-row">
	
	<div class="flex w-full flex-col border-b border-gray-200 p-6 lg:w-1/2 lg:border-b-0 lg:border-r lg:px-12 lg:py-8 ">
		<div class="flex items-center justify-between">
			<div>
				<h1 class="text-2xl font-bold text-gray-900 ">Embed Configuration</h1>
				<p class="mt-1 text-sm text-gray-500 ">Customize your Discord notification embeds.</p>
			</div>
		</div>

		
		<div class="mt-6 flex flex-wrap gap-2">
			{#each data.embeds as embed}
				<button
					onclick={() => (currentEmbedId = embed.id)}
					class="btn-press focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition {currentEmbedId === embed.id
						? 'bg-primary-100 text-primary-700'
						: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				>
					<span
						class="h-2 w-2 rounded-full {embed.event === 'up' ? 'bg-green-500' : 'bg-red-500'}"
					></span>
					{embed.name}
				</button>
			{/each}
			<button
				onclick={() => (currentEmbedId = -1)}
				class="btn-press focus-ring inline-flex cursor-pointer items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 "
			>
				<span class="material-symbols-outlined text-base">add</span>
				New
			</button>
		</div>

		<form method="POST" action="?/updateembed" class="mt-6 flex flex-col gap-5">
			<input type="hidden" name="id" value={currentData.id} />
			<input type="hidden" name="notificationType" value={isDownNotification ? "down" : "up"} />

			
			<div class="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 ">
				<div>
					<p class="text-sm font-medium text-gray-900 ">Notification type</p>
					<p class="text-xs text-gray-500 ">
						Triggers when a controller {isDownNotification ? "logs off" : "logs on"}
					</p>
				</div>
				<label class="inline-flex cursor-pointer items-center gap-2">
					<span class="text-xs text-gray-500 ">Logon</span>
					<input type="checkbox" bind:checked={isDownNotification} class="peer sr-only" />
					<div
						class="peer relative h-6 w-11 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-red-500 peer-checked:after:translate-x-full "
					></div>
					<span class="text-xs text-gray-500 ">Logoff</span>
				</label>
			</div>

			
			<fieldset>
				<legend class="text-xs font-semibold uppercase tracking-wider text-gray-400 ">Content</legend>
				<div class="mt-2 space-y-3">
					<div>
						<label for="embed-name" class="text-sm font-medium text-gray-700 ">Name</label>
						<input id="embed-name" type="text" bind:value={currentData.name} maxlength="80" name="name"
							class="focus-ring mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm " required />
					</div>
					<div class="grid gap-3 sm:grid-cols-2">
						<div>
							<label for="embed-title" class="text-sm font-medium text-gray-700 ">Title</label>
							<input id="embed-title" type="text" bind:value={currentData.title} maxlength="256" name="title"
								class="focus-ring mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm " required />
						</div>
						<div>
							<label for="embed-author" class="text-sm font-medium text-gray-700 ">Author</label>
							<input id="embed-author" type="text" bind:value={currentData.author} maxlength="80" name="author"
								class="focus-ring mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm " required />
						</div>
					</div>
					<div>
						<label for="embed-text" class="text-sm font-medium text-gray-700 ">Text</label>
						<textarea id="embed-text" bind:value={currentData.text} maxlength="4096" name="text" rows="3"
							class="focus-ring mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm " required></textarea>
						<p class="mt-1 text-xs text-gray-400">Supports Markdown and variables: <code class="font-mono">{`{name}`}</code>, <code class="font-mono">{`{callsign}`}</code>, <code class="font-mono">{`{frequency}`}</code></p>
					</div>
				</div>
			</fieldset>

			
			<fieldset>
				<legend class="text-xs font-semibold uppercase tracking-wider text-gray-400 ">Appearance</legend>
				<div class="mt-2 space-y-3">
					<div class="grid gap-3 sm:grid-cols-2">
						<div>
							<label for="embed-avatar" class="text-sm font-medium text-gray-700 ">Avatar URL</label>
							<input id="embed-avatar" type="url" bind:value={currentData.avatar} name="avatar"
								class="focus-ring mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm " required />
						</div>
						<div>
							<p class="text-sm font-medium text-gray-700 ">Accent color</p>
							<div class="mt-1">
								<ColorPicker bind:hex={currentData.color} name="color" />
							</div>
						</div>
					</div>
				</div>
			</fieldset>

			
			<fieldset>
				<legend class="text-xs font-semibold uppercase tracking-wider text-gray-400 ">Delivery</legend>
				<div class="mt-2 space-y-3">
					<div>
						<label for="embed-url" class="text-sm font-medium text-gray-700 ">Webhook URL</label>
						<input id="embed-url" type="url" bind:value={currentData.url} name="url" placeholder="https://discord.com/api/webhooks/..."
							class="focus-ring mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm " required />
					</div>
				</div>
			</fieldset>

			
			<div class="flex flex-wrap items-center gap-3 pt-2">
				<button type="submit"
					class="btn-press focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-700">
					<span class="material-symbols-outlined text-base">cloud_upload</span>
					Save {isDownNotification ? "logoff" : "logon"} embed
				</button>

				<button type="button" onclick={testWebhook} disabled={isTesting}
					class="btn-press focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 ">
					<span class="material-symbols-outlined text-base">{isTesting ? "progress_activity" : "verified_user"}</span>
					{isTesting ? "Sending…" : "Test webhook"}
				</button>
			</div>

			<div class="flex gap-3">
				<button type="button" onclick={() => (currentData = { ...getServerData() })}
					class="btn-press focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 ">
					<span class="material-symbols-outlined text-base">restart_alt</span>
					Reset
				</button>
			</div>
		</form>

		<form method="POST" action="?/deleteembed" class="mt-3">
			<input type="hidden" name="id" value={currentData.id} />
			<button type="submit"
				class="btn-press focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 ">
				<span class="material-symbols-outlined text-base">delete</span>
				Delete
			</button>
		</form>
	</div>

	
	<div class="font-opensans flex w-full flex-col items-center justify-center bg-[#36393f] text-white lg:w-1/2">
		<div class="flex w-full max-w-lg flex-col px-6 py-8 lg:py-12">
			<h2 class="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">Preview</h2>
			<div class="flex flex-row items-start">
				<img src={currentData.avatar} alt="Avatar" class="mr-3 mt-1 h-10 w-10 flex-shrink-0 rounded-full" />
				<div class="min-w-0 flex-1">
					<div class="flex flex-wrap items-center gap-2">
						<span class="text-base font-semibold">{currentData.author}</span>
						<span class="rounded bg-[#5865f2] px-1.5 py-0.5 text-xs font-bold">BOT</span>
						<span class="text-xs text-gray-400">Today at {currentTimeStr}</span>
					</div>
					<div
						class="dynamic-color relative mt-2 w-full rounded-lg bg-[#2b2d31] p-4 shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-lg"
					>
						{@html previewTitle || '<p class="text-base font-semibold">Loading…</p>'}
						{@html previewText || '<p class="mt-1 text-sm">Loading…</p>'}
						<p class="mt-2 text-xs text-gray-400">Today at {currentTimeStr}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.dynamic-color::before {
		background-color: var(--dynamic-color);
	}
</style>
