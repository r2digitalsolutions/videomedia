<script lang="ts">
	import { secondsToTime } from '@r2digisolutions/functions';

	const { currentTime, endTime } = $props();
</script>

<div class="relative flex items-center gap-1 text-sm text-gray-400">
	<span>{secondsToTime(currentTime)}</span>
	<span>/</span>
	<span>{secondsToTime(endTime)}</span>
</div>
