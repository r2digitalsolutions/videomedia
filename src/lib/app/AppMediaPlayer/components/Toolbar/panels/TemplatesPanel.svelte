<script lang="ts">
	import { defaultTemplates } from '$lib/app/AppMediaPlayer/types/templates';

	const applyTemplate = (templateId: string) => {};
</script>

<div class="space-y-4">
	<h2 class="text-lg font-semibold text-white">Templates</h2>
	<div class="grid grid-cols-2 gap-2">
		{#each defaultTemplates as template (template.id)}
			<button
				class="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-gray-900 transition-all hover:ring-2 hover:ring-blue-500"
				onclick={() => applyTemplate(template.id)}
			>
				<img src={template.thumbnail} alt={template.name} class="h-20 w-full object-cover" />
				<div class="p-1">
					<h3 class="text-sm font-medium text-white">{template.name}</h3>
					<span class="text-xs capitalize text-gray-400">{template.category}</span>
				</div>
			</button>
		{/each}
	</div>
</div>
