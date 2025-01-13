<script lang="ts">
	import AppMediaPlayer from '$lib/app/AppMediaPlayer/AppMediaPlayer.svelte';

	const { children } = $props();
</script>

<AppMediaPlayer>
	{@render children()}
</AppMediaPlayer>
