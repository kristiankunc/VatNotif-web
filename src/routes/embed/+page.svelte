<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	let author: string = "VatNotif";
	let title: string = "Hello, world!";
	let text: string = "This is a message from Discohook!";
	let color: string = "#5865f2";
	let avatar: string = "https://placehold.co/64x64";

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
			document.documentElement.style.setProperty("--dynamic-color", color);
		}
	}
</script>

<div class="flex w-full flex-row justify-between">
	<div class="flex w-1/2 flex-col items-center justify-center">
		<div>
			<p class="text-2xl font-semibold">Customize Discord Embed</p>

			<p class="m-2 w-full text-left text-sm text-gray-500">Author</p>
			<input type="text" bind:value={author} maxlength="80" class="m-2 rounded border border-gray-300 p-2" />
			<p class="m-2 text-sm text-gray-500">Title</p>
			<input type="text" bind:value={title} maxlength="256" class="m-2 rounded border border-gray-300 p-2" />
			<p class="m-2 text-sm text-gray-500">Text</p>
			<input type="text" bind:value={text} maxlength="4096" class="m-2 rounded border border-gray-300 p-2" />
			<p class="m-2 text-sm text-gray-500">Color</p>
			<input type="color" bind:value={color} class="m-2 rounded border border-gray-300 p-2" />
			<p class="m-2 text-sm text-gray-500">Avatar URL</p>
			<input type="url" bind:value={avatar} class="m-2 rounded border border-gray-300 p-2" />
		</div>
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
						<p class="white-space-pre-line mb-2 rounded bg-[#2b2d31] p-2 leading-relaxed">
							{text}
						</p>
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
