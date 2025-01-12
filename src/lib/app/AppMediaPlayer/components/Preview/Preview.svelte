<script lang="ts">
	import { media_player_store } from '../../stores';
	import PreviewContent from './PreviewContent.svelte';
</script>

<div
	class={[
		{
			'fixed inset-4 z-50': media_player_store.isExpanded.current,
			relative: !media_player_store.isExpanded.current
		},
		'Preview flex-1 overflow-hidden transition-all duration-300'
	]}
>
	<section
		class="relative mx-auto"
		id="preview"
		style="aspect-ratio: {media_player_store.currentResolution
			.aspectRatio}; max-height: calc(100vh - 6rem); width: auto; height: auto; overflow: hidden;"
	>
		<PreviewContent />
	</section>
</div>

<style lang="postcss">
	.Preview {
		background: conic-gradient(from 90deg at 0.8px 0.8px, #13131b 90deg, #0000 0) -2px -2px / 30px
			30px;
		align-items: center;
		justify-content: center;
		margin: auto;
		width: 100%;
		place-content: center;
		place-items: center;
		padding: 10px;
	}
</style>
