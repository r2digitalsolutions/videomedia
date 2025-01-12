<script lang="ts">
	import { fly } from 'svelte/transition';

	interface MenuItem {
		type?: 'button';
		label?: string;
		shortcut?: string;
		icon?: any;
		onclick?: () => void;
		disabled?: boolean;
	}

	interface DropdownMenuProps {
		label: string;
		items: DropdownItem[];
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
	}

	export type DropdownItem = { type: 'separator' } | MenuItem;

	let menuRef: HTMLDivElement | null = $state(null);

	const { label, items, isOpen, onOpen, onClose }: DropdownMenuProps = $props();

	$effect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef && !menuRef.contains(event.target as Node)) {
				onClose();
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});
</script>

<div bind:this={menuRef} class="relative">
	<button
		onclick={() => (isOpen ? onClose() : onOpen())}
		class={`rounded px-2 py-1 text-sm ${
			isOpen ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
		}`}
	>
		{label}
	</button>

	{#if isOpen}
		<div
			transition:fly={{ y: 100, duration: 200 }}
			class="absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border border-gray-700 bg-gray-800 py-1 shadow-xl"
		>
			{#each items as item, index (index)}
				{#if item.type === 'separator'}
					<div class="my-1 h-px bg-gray-700"></div>
				{:else}
					{@const Icon = item.icon}

					<button
						disabled={item.disabled}
						onclick={() => {
							if (item.disabled) return;

							onClose();
							item.onclick?.();
						}}
						class="group flex w-full items-center justify-between px-3 py-1.5 text-sm text-gray-300 hover:bg-blue-600 hover:text-white disabled:opacity-50"
					>
						<div class="flex items-center gap-2">
							{#if Icon}
								<Icon class="h-4 w-4" />
							{/if}
							<span>{item.label}</span>
						</div>
						{#if item.shortcut}
							<span class="text-gray-500 group-hover:text-gray-300">{item.shortcut}</span>
						{/if}
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>
