<script lang="ts">
	import type { Props } from './type';

	const { icon: Icon, label, isActive, onClick }: Props = $props();
</script>

<button
	onclick={onClick}
	class={[
		{
			'bg-gray-600 text-white': isActive,
			'text-gray-400 hover:bg-gray-800 hover:text-white': !isActive
		},
		'group relative flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-lg'
	]}
>
	<Icon className="w-5 h-5" />
	<span
		class="pointer-events-none absolute left-full z-50 ml-2 whitespace-nowrap rounded bg-gray-950 px-2 py-1 text-xs
        text-white opacity-0 shadow-lg group-hover:opacity-100"
	>
		{label}
	</span>
</button>
