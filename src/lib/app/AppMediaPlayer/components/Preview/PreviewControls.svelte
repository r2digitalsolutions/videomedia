<script lang="ts">
	import ButtonCollapse from '$lib/components/ButtonCollapse/ButtonCollapse.svelte';
	import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-svelte';
	import { media_player_store } from '../../stores';
	import CurrentTime from './CurrentTime.svelte';
	import ButtonsCreateTracks from '../ButtonsCreateTracks/ButtonsCreateTracks.svelte';
	import PreviewLoop from './PreviewLoop.svelte';

	const handleSkipBack = () => {
		console.log('Skip back');
	};

	const handleSkipForward = () => {
		console.log('Skip forward');
	};

	const togglePlayback = () => {
		media_player_store.togglePlayback();
	};
</script>

<section class="PreviewControls relative flex flex-col gap-2 p-2">
	<ButtonCollapse
		active={media_player_store.timeline.collapsed.current}
		onclick={() => {
			media_player_store.timelineToggleCollapsed();
		}}
	/>
	<div class="flex items-center gap-4">
		<ButtonsCreateTracks />
		<div class="flex flex-1 items-center justify-center gap-4">
			<CurrentTime />
			<button class="text-gray-400 hover:text-white" onclick={handleSkipBack}>
				<SkipBack class="h-4 w-4" />
			</button>
			<button
				class={[
					'rounded-full p-2 text-white',
					media_player_store.timeline.isPlaying.current
						? 'bg-red-600 hover:bg-red-700'
						: 'bg-blue-600 hover:bg-blue-700'
				]}
				onclick={togglePlayback}
			>
				{#if media_player_store.timeline.isPlaying.current}
					<Pause class="h-4 w-4" />
				{:else}
					<Play class="h-4 w-4" />
				{/if}
			</button>
			<button class="text-gray-400 hover:text-white" onclick={handleSkipForward}>
				<SkipForward class="h-4 w-4" />
			</button>
			<PreviewLoop />
			<div class="ml-4 flex items-center gap-2 opacity-20">
				<Volume2 class="h-5 w-5 text-gray-400" />
				<div class="h-1 w-24 rounded-full bg-gray-700">
					<div class="h-full w-1/2 rounded-full bg-blue-600"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.PreviewControls {
		@apply border-b border-t border-[rgba(255,255,255,0.05)];
	}
</style>
