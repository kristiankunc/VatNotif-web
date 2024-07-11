<script lang="ts">
	import { onDestroy } from "svelte";
	import { writable } from "svelte/store";
	import ColorPicker from "svelte-awesome-color-picker";
	import { showError } from "$lib/components/Error.svelte";
	import { mdToText, mdToTitle } from "$lib/string-format.js";

	export let data;

	let currentData = writable({ ...data.embeds[0] });
	let currentEmbedId = writable(data.embeds[0].id);
	let isDownNotification = $currentData.event === "down";

	currentEmbedId.subscribe((value) => {
		if (value === -1) {
			// clear all form fields
			$currentData = {
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
			return;
		}

		currentData.set({ ...(data.embeds.find((embed) => embed.id === value) || data.embeds[0]) });
	});

	currentData.subscribe((value) => {
		isDownNotification = value.event === "down";
	});

	function getTimeStr(): string {
		const date = new Date();
		return date.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: false
		});
	}
	let currentTimeStr = writable(getTimeStr());

	const interval = setInterval(() => {
		$currentTimeStr = getTimeStr();
	}, 60000);

	onDestroy(() => {
		clearInterval(interval);
	});

	$: {
		if (typeof window !== "undefined") {
			document.documentElement.style.setProperty("--dynamic-color", $currentData.color);
		}
	}

	function getServerData() {
		// should never return data.embeds[0]
		return data.embeds.find((embed) => embed.id === $currentData.id) || data.embeds[0];
	}
</script>

<svelte:head>
	<title>VatNotif | Embed configuration</title>
</svelte:head>

<div class="flex w-full flex-col justify-between md:flex-row">
	<div class="flex w-full flex-col items-center justify-center md:w-1/2">
		<div class="flex w-11/12 flex-col pt-10 md:w-4/6">
			<p class="mb-2 text-2xl font-semibold">Customize Discord Embed</p>
			<select bind:value={$currentEmbedId} class="m-2 rounded border border-gray-300 p-2">
				{#each data.embeds as embed}
					<option value={embed.id}>{embed.name}</option>
				{/each}
				<option value={-1}>Create new</option>
			</select>
			<form class="flex flex-col" method="POST" action="?/updateembed">
				<div class="items-between flex w-full flex-row justify-between">
					<p class="m-2 text-left text-sm text-gray-500">Notification type</p>

					<div class="flex items-center">
						<label class="me-5 inline-flex cursor-pointer content-center items-center justify-center">
							<input type="checkbox" value="" bind:checked={isDownNotification} class="peer sr-only" />
							<div
								class="peer-focus:ring-4rtl:peer-checked:after:-translate-x-full peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-green-500"
							></div>
						</label>
						<p class="w-full text-center text-sm text-gray-500">{isDownNotification ? "Logoff" : "Logon"} Notification</p>
					</div>
				</div>

				<input type="hidden" name="id" value={$currentData.id} />

				<input type="hidden" name="notificationType" value={isDownNotification ? "down" : "up"} />

				<p class="m-2 w-full text-left text-sm text-gray-500">Webhook URL</p>
				<input type="url" bind:value={$currentData.url} name="url" class="m-2 rounded border border-gray-300 p-2" required />

				<p class="m-2 text-sm text-gray-500">Avatar URL</p>
				<input type="url" bind:value={$currentData.avatar} name="avatar" class="m-2 rounded border border-gray-300 p-2" required />

				<p class="m-2 text-sm text-gray-500">Name</p>
				<input type="text" bind:value={$currentData.name} maxlength="80" name="name" class="m-2 rounded border border-gray-300 p-2" required />

				<div class="flex">
					<div class="flex w-1/2 flex-col">
						<p class="m-2 text-sm text-gray-500">Title</p>
						<input type="text" bind:value={$currentData.title} maxlength="256" name="title" class="m-2 rounded border border-gray-300 p-2" required />
					</div>

					<div class="flex w-1/2 flex-col">
						<p class="m-2 text-left text-sm text-gray-500">Author</p>
						<input
							type="text"
							bind:value={$currentData.author}
							maxlength="80"
							name="author"
							class="m-2 rounded border border-gray-300 p-2"
							required
						/>
					</div>
				</div>

				<p class="m-2 text-sm text-gray-500">Text</p>
				<textarea bind:value={$currentData.text} maxlength="4096" name="text" class="m-2 rounded border border-gray-300 p-2" rows="2" required />

				<div class="mb-3 ml-2 mt-3 flex justify-center">
					<ColorPicker
						hex={$currentData.color}
						name="color"
						on:input={(event) => {
							$currentData.color = event.detail.hex || "#5865f2";
						}}
					/>
				</div>

				<div class="m-2 flex cursor-pointer justify-center rounded bg-primary-500 p-2 text-white transition duration-150 hover:bg-primary-600">
					<span class="material-symbols-outlined mr-2"> cloud_upload </span>
					<input type="submit" value="Update {isDownNotification ? 'logoff' : 'logon'} notification" class=" cursor-pointer rounded text-white" />
				</div>
			</form>
			<div class="flex w-full content-center items-center justify-center">
				<button
					class="m-2 flex w-1/2 cursor-pointer justify-center rounded bg-secondary-700 p-2 text-white transition duration-150 hover:bg-secondary-800"
					on:click={() => ($currentData = { ...getServerData() })}
				>
					<span class="material-symbols-outlined mr-2"> restart_alt </span>
					<p>Reset</p>
				</button>

				<button
					class="m-2 flex w-1/2 cursor-pointer justify-center rounded bg-secondary-700 p-2 text-white transition duration-150 hover:bg-secondary-800"
					on:click={() => showError("Not implemented", "This feature is not implemented yet")}
				>
					<span class="material-symbols-outlined mr-2"> verified_user </span>
					<p>Test</p>
				</button>
			</div>
			<form method="POST" action="?/deleteembed">
				<input type="hidden" name="id" value={$currentData.id} />
				<div class="m-2 flex cursor-pointer justify-center rounded bg-red-500 p-2 text-white transition duration-150 hover:bg-red-600">
					<span class="material-symbols-outlined mr-2"> delete </span>
					<input type="submit" value="Delete" class=" cursor-pointer rounded text-white" />
				</div>
			</form>
		</div>
	</div>
	<div class="flex w-full flex-col items-center justify-center bg-[#36393f] font-opensans text-white md:w-1/2">
		<div class="m-4 flex flex-row p-4">
			<img src={$currentData.avatar} alt="Profile" class="mr-3 mt-2 h-12 w-12 rounded-full" />

			<div class="flex flex-col items-center justify-center">
				<div class="w-full">
					<div class="mb-2 flex content-start items-center">
						<p class="text-m font-semibold">{$currentData.author}</p>
						<div class="ml-2">
							<span class="rounded bg-[#5865f2] px-1.5 py-0.5 text-sm font-bold text-white">BOT</span>
						</div>
						<span class="ml-2 text-xs text-gray-400">Today at {$currentTimeStr}</span>
					</div>
				</div>
				<div
					class="dynamic-color relative w-full max-w-lg rounded-lg bg-[#2b2d31] p-4 shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-l-lg"
				>
					<div class="flex flex-col">
						{#await mdToTitle($currentData.title)}
							<p class="pl-2 text-lg font-semibold">Loading...</p>
						{:then html}
							{@html html}
						{/await}

						{#await mdToText($currentData.text)}
							<p>Loading...</p>
						{:then html}
							{@html html}
						{/await}
						<p class="pl-2 text-xs">Today at {$currentTimeStr}</p>
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
