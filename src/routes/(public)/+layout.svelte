<script lang="ts">
	import { page } from '$app/state';
	import Link from '$lib/components/Link.svelte';
	import { redirectToHome, redirectToLogin, redirectToRegister } from '$lib/settings/vars.js';

	const { children, data } = $props();
</script>

<div
	class="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 font-[sans-serif] text-gray-800 dark:from-purple-500 dark:via-purple-400 dark:to-purple-300 dark:text-gray-300"
>
	<div class="fle-col flex min-h-screen items-center justify-center p-4 lg:p-6">
		<div class="grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
			<div>
				<Link href={redirectToHome}
					><img
						src="https://readymadeui.com/readymadeui-white.svg"
						alt="logo"
						class="mb-12 inline-block w-44 lg:w-52"
					/>
				</Link>
				<h2
					class="text-pretty text-2xl font-extrabold text-white lg:text-4xl lg:leading-[50px] dark:text-gray-50"
				>
					{page.data.title}
				</h2>
				<p class="mt-6 text-sm text-white">
					{page.data.description}
				</p>
				<p class="mt-6 text-sm text-white">
					{#if page.url.pathname === '/register'}
						Do have an account
						<Link href={redirectToLogin}>Login here</Link>
					{:else}
						Don't have an account
						<Link href={redirectToRegister}>Register here</Link>
					{/if}
				</p>
			</div>
			<div
				class="flex w-full max-w-md flex-col gap-2 rounded-xl bg-white px-6 py-8 md:ml-auto dark:bg-gray-900"
			>
				{@render children()}
			</div>
		</div>
	</div>
</div>
