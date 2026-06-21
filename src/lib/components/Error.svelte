<script lang="ts">
	import { hideError, getErrorState } from "$lib/stores/error.svelte";

	let error = getErrorState();
</script>

{#if error.isVisible}
	
	<div
		class="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/40"
		role="presentation"
		onclick={() => hideError()}
		onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') hideError(); }}
	>
		
		<div
			role="dialog"
			tabindex="-1"
			class="m-4 flex w-full max-w-md animate-scale-in flex-col rounded-xl bg-red-500 p-6 text-white shadow-elevation-3"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => { if (e.key === 'Escape') hideError(); }}
		>
			<div class="flex items-center gap-3">
				<span class="material-symbols-outlined text-3xl">warning</span>
				<h2 class="text-2xl font-bold">{error.title}</h2>
			</div>
			<p class="mt-3 text-base leading-relaxed opacity-90">{error.message}</p>
			<button
				onclick={() => hideError()}
				class="btn-press focus-ring mt-5 cursor-pointer self-center rounded-lg bg-white/20 px-8 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
			>
				Got it
			</button>
		</div>
	</div>
{/if}
