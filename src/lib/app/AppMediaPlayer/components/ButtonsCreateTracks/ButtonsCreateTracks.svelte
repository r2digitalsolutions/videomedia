<script lang="ts">
	import { Plus } from 'lucide-svelte';
	import { MEDIA_TYPES, type MediaType } from '../../types/media';
	import Button from '$lib/components/Button/Button.svelte';

	const buttonTracks: { action: MediaType; label: string }[] = [
		{
			action: MEDIA_TYPES.video,
			label: 'Video'
		},
		{
			action: MEDIA_TYPES.text,
			label: 'Text'
		},
		{
			action: MEDIA_TYPES.audio,
			label: 'Audio'
		},
		{
			action: MEDIA_TYPES.image,
			label: 'Image'
		}
	];

	const addTrack = (type: MediaType) => {};
</script>

<div class="flex justify-start gap-2">
	{#each buttonTracks as button (button.action)}
		<Button mode="button" onclick={() => addTrack(button.action)}>
			<Plus class="h-4 w-4" />
			{button.label}
		</Button>
	{/each}
</div>
