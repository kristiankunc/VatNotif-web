<script lang="ts">
	import { DiscordHelper, mdToHtml, type DiscordEmbed } from "$lib/discord-embeds";
	import { onDestroy } from "svelte";

	export let data;
	export let form;

	let isDownNotification: boolean = false;

	const defaultEmbed = DiscordHelper.getDefaultEmbed();

	let currentData: DiscordEmbed = { ...(data.embeds?.up || defaultEmbed.up) };

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
			document.documentElement.style.setProperty("--dynamic-color", currentData.color);
		}
	}

	function getServerData(): DiscordEmbed {
		switch (isDownNotification) {
			case true:
				return data.embeds?.down || defaultEmbed.down;
			case false:
				return data.embeds?.up || defaultEmbed.up;
		}
	}
</script>

<div class="flex w-full flex-col justify-between md:flex-row">
	<div class="flex w-full flex-col items-center justify-center md:w-1/2">
		<div class="flex w-4/6 flex-col pt-10">
			<form class="flex flex-col pt-10" method="POST" action="?/updateembed">
				{#if form?.message}<p class="error">{form.message}</p>{/if}
				<p class="mb-2 text-2xl font-semibold">Customize Discord Embed</p>
				<div class="items-between flex w-full flex-row justify-between">
					<p class="m-2 text-left text-sm text-gray-500">Notification type</p>

					<div class="flex items-center">
						<label class="me-5 inline-flex cursor-pointer content-center items-center justify-center">
							<input
								type="checkbox"
								value=""
								bind:checked={isDownNotification}
								class="peer sr-only"
								on:change={() => {
									currentData = { ...getServerData() };
								}}
							/>
							<div
								class="peer-focus:ring-4rtl:peer-checked:after:-translate-x-full peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-green-500"
							></div>
						</label>
						<p class="w-full text-center text-sm text-gray-500">{isDownNotification ? "Logoff" : "Logon"} Notification</p>
					</div>
				</div>

				<input type="hidden" name="isDownNotification" value={isDownNotification} />

				<p class="m-2 w-full text-left text-sm text-gray-500">Webhook URL</p>
				<input type="url" bind:value={currentData.url} name="url" class="m-2 rounded border border-gray-300 p-2" required />

				<p class="m-2 text-sm text-gray-500">Avatar URL</p>
				<input type="url" bind:value={currentData.avatar} name="avatar" class="m-2 rounded border border-gray-300 p-2" required />

				<div class="flex">
					<div class="flex w-1/2 flex-col">
						<p class="m-2 text-sm text-gray-500">Title</p>
						<input type="text" bind:value={currentData.title} maxlength="256" name="title" class="m-2 rounded border border-gray-300 p-2" required />
					</div>

					<div class="flex w-1/2 flex-col">
						<p class="m-2 text-left text-sm text-gray-500">Author</p>
						<input type="text" bind:value={currentData.author} maxlength="80" name="author" class="m-2 rounded border border-gray-300 p-2" required />
					</div>
				</div>

				<p class="m-2 text-sm text-gray-500">Text</p>
				<textarea bind:value={currentData.text} maxlength="4096" name="text" class="m-2 rounded border border-gray-300 p-2" rows="2" required />

				<p class="m-2 text-sm text-gray-500">Color</p>
				<input type="color" bind:value={currentData.color} name="color" class="m-2 rounded border border-gray-300 p-2" required />

				<input
					type="submit"
					value="Update {isDownNotification ? 'logoff' : 'logon'} notification"
					class="m-2 cursor-pointer rounded bg-primary-500 p-2 text-white hover:bg-primary-600"
				/>
			</form>
			<div class="flex w-full content-center items-center justify-center">
				<button
					class="m-2 w-1/2 cursor-pointer rounded bg-secondary-700 p-2 text-white hover:bg-secondary-800"
					on:click={() => (currentData = { ...getServerData() })}
				>
					Reset
				</button>

				<button class="m-2 w-1/2 cursor-pointer rounded bg-secondary-700 p-2 text-white hover:bg-secondary-800">Test</button>
			</div>
		</div>
	</div>
	<div class="flex w-full flex-col items-center justify-center bg-[#36393f] font-opensans text-white md:w-1/2">
		<div class="m-4 flex flex-row p-4">
			<img src={currentData.avatar} alt="Profile" class="mr-3 mt-2 h-12 w-12 rounded-full" />

			<div class="flex flex-col items-center justify-center">
				<div class="w-full">
					<div class="mb-2 flex content-start items-center">
						<p class="text-m font-semibold">{currentData.author}</p>
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
						<p class="p-2 text-lg font-semibold">{currentData.title}</p>
						{#await mdToHtml(currentData.text)}
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
