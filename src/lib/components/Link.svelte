<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		children: Snippet;
		class?: string;
	};

	const { href, children, class: clx }: Props = $props();
</script>

<a {href} class={['ml-1 font-semibold text-white hover:underline', clx]}>
	{@render children()}
</a>
