<script lang="ts">
	import { X } from 'lucide-svelte';
	import type { Props } from './type';
	import { ModalStore } from './store.svelte';
	import { fade, fly } from 'svelte/transition';

	const { open, onClose, title, children }: Props = $props();

	const modal = new ModalStore(open, { onClose });
	let ref: HTMLDivElement | undefined = $state();

	$effect(() => {
		return modal.effect(open, ref);
	});
</script>

{#if modal.open}
	<div
		bind:this={ref}
		class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="max-h-[90vh] w-[600px] overflow-y-auto rounded-lg bg-gray-800"
			transition:fly={{ y: 100, duration: 200 }}
		>
			<div class="flex items-center justify-between border-b border-gray-700 p-4">
				<h2 class="text-lg font-semibold dark:text-white">{title}</h2>
				<button
					onclick={() => {
						modal.onClose();
					}}
					class="text-gray-400 hover:text-white"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<section class="flex flex-col gap-4">
				{@render children()}
			</section>
		</div>
	</div>
{/if}
