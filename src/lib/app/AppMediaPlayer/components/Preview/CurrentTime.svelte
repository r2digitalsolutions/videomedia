<script>
	import CurrentTime from '$lib/components/CurrentTime/CurrentTime.svelte';
	import { media_player_store } from '../../stores';
</script>

<CurrentTime
	currentTime={media_player_store.timeline.currentTime}
	endTime={media_player_store.timeline.duration}
/>
