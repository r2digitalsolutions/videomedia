<script lang="ts">
	import Aside from '$lib/components/Aside/Aside.svelte';
	import AsideContent from '$lib/components/Aside/AsideContent.svelte';
	import { type Tab, tabs } from '../../types/tabs';

	import CollagePanel from './panels/CollagePanel.svelte';
	import MediaPanel from './panels/MediaPanel.svelte';
	import SettingsPanel from './panels/SettingsPanel.svelte';
	import TextPanel from './panels/TextPanel.svelte';
	import VideoPanel from './panels/VideoPanel.svelte';
	import AudioPanel from './panels/AudioPanel.svelte';
	import TemplatesPanel from './panels/TemplatesPanel.svelte';

	const panels: Partial<Record<Tab, any>> = {
		templates: TemplatesPanel,
		media: MediaPanel,
		collage: CollagePanel,
		text: TextPanel,
		video: VideoPanel,
		audio: AudioPanel,
		settings: SettingsPanel
	};

	let activeTab: Tab | undefined = $state(undefined);

	const ComponentPanel = $derived(() => {
		if (!activeTab) return null;
		return panels[activeTab];
	});
</script>

<Aside
	left={false}
	{tabs}
	onChange={(tab) => {
		activeTab = activeTab === tab.id ? undefined : tab.id;
	}}
	{activeTab}
>
	{#if ComponentPanel}
		<AsideContent>
			<ComponentPanel />
		</AsideContent>
	{/if}
</Aside>
