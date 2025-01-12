<script lang="ts">
	import type { Props } from './type';

	const { active, onclick }: Props = $props();

	$inspect(active);
</script>

<button
	type="button"
	aria-label="Collapse timeline"
	{onclick}
	class="group absolute -top-[22px] left-3 flex w-20 items-center justify-center border-0 bg-transparent p-2 text-center text-gray-400 transition-colors"
>
	<svg
		viewBox="0 0 61 13"
		fill="currentColor"
		class="text-dark-800 group-hover:text-indigo-400 dark:text-gray-800"
	>
		<path
			d="M0 12.2441L4.90701 12.2441C8.22072 12.2441 10.907 9.55785 10.907 6.24414L10.907 5.99978C10.907 2.68608 13.5933 -0.000215171 16.907 -0.000215316L42.7025 -0.000216443C46.0162 -0.000216588 48.7025 2.68608 48.7025 5.99979L48.7025 6.24411C48.7025 9.55783 51.3888 12.2441 54.7025 12.2441L60.0666 12.2441L0 12.2441Z"
		></path>
	</svg>
	<svg
		class={[
			{
				'rotate-180': Boolean(active)
			},
			'absolute text-white group-hover:text-indigo-400 group-hover:dark:text-white'
		]}
		fill="currentColor"
		aria-hidden="true"
		width="12"
		height="12"
		viewBox="0 0 12 12"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2.22 4.47c.3-.3.77-.3 1.06 0L6 7.19l2.72-2.72a.75.75 0 0 1 1.06 1.06L6.53 8.78c-.3.3-.77.3-1.06 0L2.22 5.53a.75.75 0 0 1 0-1.06Z"
			fill="currentColor"
		></path>
	</svg>
</button>
