<script lang="ts">
	import { JSONtoEmbed, mdToHtml, type DiscordEmbed } from "$lib/discord-embeds";
	import { onDestroy } from "svelte";

	export let data;

	let isDownNotification: boolean = false;
	let currentNotificationData = isDownNotification ? data.currentWebhooks?.down_content : data.currentWebhooks?.up_content;

	let parsedData: DiscordEmbed = {
		author: "VatNotif",
		title: "Hello, world!",
		text: "This is a message from Discohook!",
		color: "#5865f2",
		avatar: "https://placehold.co/64x64"
	};

	$: {
		if (currentNotificationData) {
			parsedData = JSONtoEmbed(JSON.stringify(currentNotificationData));
		}
	}

	let currentTimeStr: string = getTimeStr();

	function getTimeStr(): string {
		const date = new Date();
		return date.toLocaleTimeString().split(":").slice(0, 2).join(":");
	}

	const interval = setInterval(() => {
		currentTimeStr = getTimeStr();
	}, 60000);

	onDestroy(() => {
		clearInterval(interval);
	});

	$: {
		if (typeof window !== "undefined") {
			document.documentElement.style.setProperty("--dynamic-color", parsedData.color);
		}
	}
</script>

<div class="flex w-full flex-row justify-between">
	<div class="justify-cente flex w-1/2 flex-col items-center">
		<form class="flex w-4/6 flex-col pt-10" method="post" action="?/updateembed">
			<p class="mb-2 text-2xl font-semibold">Customize Discord Embed</p>
			<div class="flex w-full flex-row items-center justify-center">
				<p class="m-2 w-full text-left text-sm text-gray-500">Notification type</p>
				<div class="w-full" />
				<label class="me-5 inline-flex cursor-pointer content-center items-center justify-center">
					<input type="checkbox" value="" bind:checked={isDownNotification} class="peer sr-only" />
					<div
						class="peer-focus:ring-4rtl:peer-checked:after:-translate-x-full peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-green-500"
					></div>
				</label>
				<p class="w-full text-left text-sm text-gray-500">{isDownNotification ? "Down" : "Up"} Notification</p>
			</div>

			<p class="m-2 w-full text-left text-sm text-gray-500">Webhook URL</p>
			<input type="url" bind:value={parsedData name="url" class="m-2 rounded border border-gray-300 p-2" required />
			<p class="m-2 w-full text-left text-sm text-gray-500">Author</p>
			<input type="text" bind:value={parsedData.author} maxlength="80" name="author" class="m-2 rounded border border-gray-300 p-2" required />
			<p class="m-2 text-sm text-gray-500">Title</p>
			<input type="text" bind:value={parsedData.title} maxlength="256" name="title" class="m-2 rounded border border-gray-300 p-2" required />
			<p class="m-2 text-sm text-gray-500">Text</p>
			<textarea bind:value={parsedData.text} maxlength="4096" name="text" class="m-2 rounded border border-gray-300 p-2" rows="10" required />
			<p class="m-2 text-sm text-gray-500">Color</p>
			<input type="color" bind:value={parsedData.color} name="color" class="m-2 rounded border border-gray-300 p-2" required />
			<p class="m-2 text-sm text-gray-500">Avatar URL</p>
			<input type="url" bind:value={parsedData.avatar} name="avatar" class="m-2 rounded border border-gray-300 p-2" required />

			{#if !isDownNotification}
				<input type="submit" value="Update up notification" class="m-2 cursor-pointer rounded bg-green-500 p-2 text-white" />
			{:else}
				<input type="submit" value="Update down notification" class="m-2 cursor-pointer rounded bg-red-600 p-2 text-white" />
			{/if}
		</form>
	</div>
	<div class="flex min-h-screen w-1/2 flex-col items-center justify-center bg-[#36393f] font-opensans text-white">
		<div class="flex flex-row">
			<img src={avatar} alt="Profile" class="mr-3 mt-2 h-12 w-12 rounded-full" />

			<div class="flex flex-col items-center justify-center">
				<div class="w-full">
					<div class="mb-2 flex content-start items-center">
						<p class="text-m font-semibold">{author}</p>
						<div class="ml-2">
							<span class="rounded bg-[#5865f2] px-1.5 py-0.5 text-sm font-bold text-white">BOT</span>
						</div>
						<span class="ml-2 text-xs text-gray-400">Today at {currentTimeStr}</span>
					</div>
				</div>
				<div
					class="dynamic-color relative w-full max-w-lg rounded-lg bg-[#2b2d31] p-4 shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-lg"
				>
					<div class="flex flex-col">
						<p class="p-2 text-lg font-semibold">{title}</p>
						{#await mdToHtml(text)}
							<p>Loading...</p>
						{:then html}
							{@html html}
						{/await}
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
