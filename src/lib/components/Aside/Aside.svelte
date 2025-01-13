<script lang="ts">
	import TabButton from '../TabButton/TabButton.svelte';
	import type { Props } from './type';

	const { tabs = [], onChange, activeTab, children, left }: Props = $props();
</script>

<div class={['flex h-full overflow-hidden border-gray-800', !left ? 'border-r' : 'border-l']}>
	{#if left}
		{@render children?.()}
	{/if}

	<div
		class={[
			'bg-dark-950 flex w-14 flex-col items-center gap-2 border-gray-800 py-4',
			left ? 'border-l' : 'border-r'
		]}
	>
		{#each tabs as tab (tab.id)}
			<TabButton
				icon={tab.icon}
				label={tab.label}
				isActive={activeTab === tab.id}
				onClick={() => onChange?.(tab)}
			/>
		{/each}
	</div>
	{#if !left}
		{@render children?.()}
	{/if}
</div>
