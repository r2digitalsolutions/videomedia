<script lang="ts">
	import MainContent from './components/Content/MainContent.svelte';
	import MainToolbar from './components/MainToolbar/MainToolbar.svelte';

	const { children } = $props();
</script>

<div class="bg-dark-800 flex h-full min-h-dvh flex-col overflow-hidden text-white">
	<MainToolbar />
	<MainContent />
</div>
