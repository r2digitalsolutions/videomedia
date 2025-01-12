<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import { Disc, Disc3 } from 'lucide-svelte';
	import Button from '$lib/components/Button/Button.svelte';

	type Props = {
		showRecording: boolean;
		onclick: MouseEventHandler<HTMLButtonElement>;
	};

	const { showRecording, onclick }: Props = $props();
</script>

<Button {onclick}>
	{#if showRecording}
		<Disc3 class="h-4 w-4 animate-spin text-red-400" />
	{:else}
		<Disc class="h-4 w-4 text-gray-400" />
	{/if}
</Button>
