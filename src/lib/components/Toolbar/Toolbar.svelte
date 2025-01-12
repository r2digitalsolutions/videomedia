<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import DropdownMenu from '../DropdownMenu.svelte';
	import ToolbarSeparator from '../ToolbarSeparator.svelte';
	import { type Props } from './type';
	import { ToolbarStore } from './store.svelte';

	const { title, menu, center, right, bottom, onChangeMenu }: Props = $props();

	const toolbar_store = new ToolbarStore(onChangeMenu);
</script>

<header class="bg-dark-900 border-b border-gray-800">
	<div class="bg-dark-950 flex h-8 items-center px-2">
		<div class="flex items-center gap-1">
			<Menu class="h-4 w-4 text-gray-400" />
			<span class="text-sm font-medium text-gray-300">{title}</span>
		</div>

		<div class="ml-4 flex items-center space-x-1">
			{#each menu as item, index (index)}
				{#if item.type === 'separator'}
					<ToolbarSeparator />
				{:else if item.type === 'button'}
					<button onclick={item.onclick}>
						{item.label}
					</button>
				{:else if item.type === 'dropdown'}
					<DropdownMenu
						label={item.label}
						items={item.items}
						isOpen={toolbar_store.activeMenu === item.label}
						onOpen={() => (toolbar_store.activeMenu = item.label)}
						onClose={() => (toolbar_store.activeMenu = null)}
					/>
				{/if}
			{/each}
		</div>
		<div class="mx-auto flex items-center gap-2">
			{#if center}
				{@render center()}
			{/if}
		</div>
		<div class="flex items-center gap-2">
			{#if right}
				{@render right()}
			{/if}
		</div>
	</div>

	<div class="flex h-10 items-center gap-1 px-2">
		{#if bottom}
			{@render bottom()}
		{/if}
	</div>
</header>
