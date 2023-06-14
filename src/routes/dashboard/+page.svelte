<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import "$lib/styles/dashboard.css";
	import { InputValidation } from "$lib/scripts/input-validation";
	import { writable } from "svelte/store";
	import { onMount } from "svelte";

	import type { VatsimUserData } from "$lib/types/vatsim";

	let enteredCallsign = "";
	let enteredDiscordNotification = "";

	export let data: {
		watchedCallsigns: string[];
		user: VatsimUserData;
		discordNotifications: string[];
		isIgnored: boolean;
	};

	const watchedCallsignsStore = writable(data.watchedCallsigns);
	const discordNotificationsStore = writable(data.discordNotifications);
	const isIgnoredStore = writable(data.isIgnored);

	onMount(() => {
		watchedCallsignsStore.set(data.watchedCallsigns);
		discordNotificationsStore.set(data.discordNotifications);
	});

	async function addCallsignHandler(): Promise<string | void> {
		if (!enteredCallsign) {
			return alert("Please enter a callsign");
		}

		if (!InputValidation.isCallsign(enteredCallsign)) {
			return alert("Please enter a valid callsign");
		}

		document.body.style.cursor = "wait";
		const res = await fetch(`/api/callsign?callsign=${enteredCallsign}`, {
			method: "POST",
		});
		document.body.style.cursor = "default";

		if (!res.ok) {
			return alert(`Something went wrong\nError: ${(await res.json()).message}`);
		}

		watchedCallsignsStore.update((watchedCallsigns) => {
			watchedCallsigns.push(enteredCallsign);
			return watchedCallsigns;
		});

		enteredCallsign = "";
	}

	async function deleteCallsignHandler(callsign: string): Promise<string | void> {
		if (!confirm("Are you sure you want to delete this callsign?")) {
			return;
		}

		document.body.style.cursor = "wait";
		const res = await fetch(`/api/callsign?callsign=${callsign}`, {
			method: "DELETE",
		});
		document.body.style.cursor = "default";

		if (!res.ok) {
			return alert(`Something went wrong\nError: ${(await res.json()).message}`);
		}

		watchedCallsignsStore.update((watchedCallsigns) => {
			return watchedCallsigns.filter((c) => c !== callsign);
		});
	}

	export async function addDiscordNotificationHandler(): Promise<string | void> {
		if (!enteredDiscordNotification) {
			return alert("Please enter a notification");
		}

		if (!InputValidation.isDiscordWebhookUrl(enteredDiscordNotification)) {
			return alert("Please enter a valid notification");
		}

		document.body.style.cursor = "wait";
		const res = await fetch(`/api/discord-notification?webhookUrl=${enteredDiscordNotification}`, {
			method: "POST",
		});
		document.body.style.cursor = "default";

		if (!res.ok) {
			return alert(`Something went wrong\nError: ${(await res.json()).message}`);
		}

		discordNotificationsStore.update((discordNotifications) => {
			discordNotifications.push(enteredDiscordNotification);
			return discordNotifications;
		});

		enteredDiscordNotification = "";
	}

	export async function deleteDiscordNotificationHandler(webookUrl: string): Promise<string | void> {
		if (!confirm("Are you sure you want to delete this notification?")) {
			return;
		}

		document.body.style.cursor = "wait";
		const res = await fetch(`/api/discord-notification?webhookUrl=${webookUrl}`, {
			method: "DELETE",
		});
		document.body.style.cursor = "default";

		if (!res.ok) {
			return alert(`Something went wrong\nError: ${(await res.json()).message}`);
		}

		discordNotificationsStore.update((discordNotifications) => {
			return discordNotifications.filter((n) => n !== webookUrl);
		});
	}

	export async function testDiscordNotificationHandler(webookUrl: string): Promise<string | void> {
		document.body.style.cursor = "wait";
		const res = await fetch(webookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content: "VatNotif test notification",
			}),
		});
		document.body.style.cursor = "default";

		if (!res.ok) {
			return alert(`Something went wrong\nError: ${await res.text()}`);
		}

		alert("Notification sent");
	}

	export async function ignoreHandler(): Promise<string | void> {
		isIgnoredStore.update((isIgnored) => !isIgnored);

		document.body.style.cursor = "wait";

		const res = await fetch("/api/ignore", {
			method: "POST",
			body: JSON.stringify({
				state: $isIgnoredStore,
			}),
		});

		document.body.style.cursor = "default";

		if (!res.ok) {
			return alert(`Something went wrong\nError: ${(await res.json()).message}`);
		}
	}
</script>

<svelte:head>
	<title>VatNotif - Dashboard</title>
</svelte:head>

<div class="main-container">
	<h1>Dashboard</h1>

	<div class="section center">
		<h2>User info</h2>
		<p>CID: {data.user.cid}</p>
		<p>Name: {data.user.personal.name_full}</p>
	</div>

	<div class="section center">
		<h2>Privacy settings</h2>
		<p>Your CID currently <b>{$isIgnoredStore ? "can't" : "can"}</b> be tracked</p>
		<label class="switch">
			<input type="checkbox" bind:checked={$isIgnoredStore} on:click={ignoreHandler} />
			<span class="slider" />
		</label>
	</div>

	<div class="section">
		<h2>Watched callsigns</h2>
		<div class="watched-callsigns-div section">
			{#if $watchedCallsignsStore.length === 0}
				<p>You have no watched callsigns</p>
			{:else}
				{#each $watchedCallsignsStore as callsign}
					<div class="watched-callsign">
						<p>{callsign}</p>
						<button on:click={() => deleteCallsignHandler(callsign)}>Delete</button>
					</div>
				{/each}
			{/if}
			<div class="watched-callsign">
				<input placeholder="Enter callsign" bind:value={enteredCallsign} />
				<button on:click={addCallsignHandler}>Add</button>
			</div>
		</div>
	</div>

	<div class="section">
		<h2>Discord Notifications</h2>
		<div class="discord-notifications-div section">
			{#if $discordNotificationsStore.length === 0}
				<p>You have no notifications</p>
			{:else}
				{#each $discordNotificationsStore as notification}
					<div class="discord-notification">
						<p>{notification}</p>
						<button on:click={() => testDiscordNotificationHandler(notification)}>Test</button>
						<button on:click={() => deleteDiscordNotificationHandler(notification)}>Delete</button>
					</div>
				{/each}
			{/if}
			<div class="discord-notification">
				<input placeholder="Enter webhook url" bind:value={enteredDiscordNotification} style="word-break: break-all" />
				<button on:click={addDiscordNotificationHandler}>Add</button>
			</div>
		</div>
	</div>
</div>
