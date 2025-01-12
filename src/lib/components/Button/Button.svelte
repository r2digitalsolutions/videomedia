<script lang="ts">
	import type { Props } from './type';

	const {
		children,
		mode = 'default',
		rounded = true,
		class: clx,
		size = 'sm',
		href,
		...props
	}: Props = $props();

	const modes = {
		default: 'rounded p-1.5 hover:bg-gray-800',
		button:
			'border border-gray-700 bg-gray-600 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
	};

	const sizes = {
		xs: 'px-1 py-0.5 text-xs',
		sm: 'px-2 py-0.5 text-sm',
		md: 'px-3 py-0.5 text-base',
		lg: 'px-4 py-0.5 text-lg',
		xl: 'px-5 py-0.5 text-xl',
		'2xl': 'px-6 py-0.5 text-2xl',
		'3xl': 'px-7 py-0.5 text-3xl',
		'4xl': 'px-8 py-0.5 text-4xl'
	};

	const rounded_class = rounded ? 'rounded-full' : 'rounded-none';
	const size_class = mode == 'button' ? sizes[size] : undefined;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{...props}
	{href}
	class={['flex items-center gap-1', clx, modes[mode], rounded_class, size_class]}
>
	{@render children()}
</svelte:element>
