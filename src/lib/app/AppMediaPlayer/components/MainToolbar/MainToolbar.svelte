<script lang="ts">
	import Toolbar from '$lib/components/Toolbar/Toolbar.svelte';
	import { center, right, bottom } from './index.svelte';
	import { menu } from '$lib/app/AppMediaPlayer/types/menu';
	import KeyboardShortcutsDialog from './KeyboardShortcutsDialog.svelte';
	import { shortcut_store } from '../../stores';

	$effect(() => {
		return shortcut_store.effect();
	});
</script>

<Toolbar title="VideoMedia" {menu} {center} {right} {bottom} />
<KeyboardShortcutsDialog />
