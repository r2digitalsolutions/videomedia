<script lang="ts" module>
	import ToolbarSeparator from '$lib/components/ToolbarSeparator.svelte';
	import ButtonAspectRatio from './buttons/ButtonAspectRatio.svelte';
	import ButtonExpanded from './buttons/ButtonExpanded.svelte';
	import ButtonLocales from './buttons/ButtonLocales.svelte';
	import ButtonProjectOpen from './buttons/ButtonProjectOpen.svelte';
	import ButtonRecording from './buttons/ButtonRecording.svelte';
	import ButtonSave from './buttons/ButtonSave.svelte';
	import ButtonSettings from './buttons/ButtonSettings.svelte';
	import ExportButton from './buttons/ExportButton.svelte';
	import ProjectName from './ProjectName.svelte';

	let isExpanded: boolean = $state(false);
	let showRecording: boolean = $state(false);

	const onclickRecording = () => (showRecording = !showRecording);
	const toggleExpanded = () => (isExpanded = !isExpanded);

	export { center, right, bottom };
</script>

{#snippet center()}
	<ProjectName />
{/snippet}

{#snippet right()}
	<ButtonExpanded {isExpanded} onclick={toggleExpanded} />
	<ButtonSettings />
{/snippet}

{#snippet bottom()}
	<ButtonSave />
	<ButtonProjectOpen />
	<ButtonRecording {showRecording} onclick={onclickRecording} />
	<ToolbarSeparator />
	<ExportButton />
	<ToolbarSeparator />
	<div class="flex items-center gap-2">
		<ButtonAspectRatio />
	</div>
	<div class="flex items-center gap-2">
		<ButtonLocales />
	</div>
	<ToolbarSeparator />
{/snippet}
