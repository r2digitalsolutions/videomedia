<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { Minimize2, Maximize2 } from 'lucide-svelte';
	import Button from '$lib/components/Button/Button.svelte';

	type Props = {
		isExpanded: boolean;
		onclick: MouseEventHandler<HTMLButtonElement>;
	};

	const { isExpanded, onclick }: Props = $props();
</script>

<Button {onclick}>
	{#if isExpanded}
		<Minimize2 class="h-4 w-4 text-gray-400" />
	{:else}
		<Maximize2 class="h-4 w-4 text-gray-400" />
	{/if}
</Button>
