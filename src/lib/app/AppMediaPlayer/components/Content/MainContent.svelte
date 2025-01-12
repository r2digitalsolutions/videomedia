<script lang="ts">
	import Preview from '../Preview/Preview.svelte';
	import PreviewControls from '../Preview/PreviewControls.svelte';
	import Timeline from '../Timeline/Timeline.svelte';
	import Toolbar from '../Toolbar/Toolbar.svelte';
	import ToolbarActive from '../ToolbarActive/ToolbarActive.svelte';

	let selectedContent = false;
</script>

<div
	class="grid h-[calc(100vh-73px)] w-full"
	style="grid-template-columns: auto 1fr {selectedContent ? '300px' : '0'};"
>
	<Toolbar />
	<div class="flex w-full flex-1 flex-col overflow-hidden">
		<Preview />
		<PreviewControls />
		<Timeline />
	</div>
	<ToolbarActive />
</div>
