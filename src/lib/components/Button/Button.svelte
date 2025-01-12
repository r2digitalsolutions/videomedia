<script lang="ts">
	import type { Props } from './type';

	const { children, class: clx, ...props }: Props = $props();
</script>

<button {...props} class={['rounded p-1.5 hover:bg-gray-800', clx]}>
	{@render children()}
</button>
