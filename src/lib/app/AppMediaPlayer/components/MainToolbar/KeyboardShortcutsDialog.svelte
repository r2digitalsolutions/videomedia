<script lang="ts">
	import { platform } from '@r2digisolutions/functions';
	import Modal from '$lib/components/Modal/Modal.svelte';
	import { shortcut_store } from '../../stores';
	import { shortcuts } from '../../types/keyboard';

	const isMac = platform.isMac();
	const list = $derived(shortcuts(isMac));
</script>

<Modal open={shortcut_store.open} onClose={shortcut_store.onClose} title="Keyboard Shortcuts">
	<div class="space-y-6 p-4">
		{#each list as category (category.category)}
			<div>
				<h3 class="mb-2 text-sm font-medium text-gray-300">{category.category}</h3>
				<div class="space-y-2">
					{#each category.items as shortcut (shortcut.keys)}
						<div class="flex items-center justify-between text-sm">
							<div class="flex items-center gap-1">
								current
								{#each shortcut.keys as key, keyIndex (key)}
									<kbd class="rounded bg-gray-700 px-2 py-1 text-xs">{key}</kbd>
									{#if keyIndex < shortcut.keys.length - 1}
										<span class="text-gray-500">+</span>
									{/if}
								{/each}
							</div>
							<span class="text-gray-400">{shortcut.description}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Modal>
