<script lang="ts">
	const { children } = $props();
</script>

<div class="bg-dark-900 w-60 overflow-y-auto border-gray-800 p-4">
	{@render children?.()}
</div>
