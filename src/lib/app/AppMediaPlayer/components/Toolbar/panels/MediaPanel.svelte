<script lang="ts">
	import { MEDIA_TYPES, MOCK_MEDIA, type MediaItem } from '$lib/app/AppMediaPlayer/types/media';
	import { Plus, Search, Upload } from 'lucide-svelte';
	import type { ChangeEventHandler } from 'svelte/elements';

	let mediaItems: MediaItem[] = $state(MOCK_MEDIA);
	let searchTerm: string = $state('');
	const tracks: any[] = [];

	const filteredItems = $derived(
		mediaItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	const addTrack = () => {};
	const addTrackContent = () => {};

	const handleFileUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
		const files = e.currentTarget.files;
		if (!files) return;

		Array.from(files).forEach((file) => {
			const type = file.type.startsWith('image/')
				? MEDIA_TYPES.image
				: file.type.startsWith('video/')
					? MEDIA_TYPES.video
					: file.type.startsWith('audio/')
						? MEDIA_TYPES.audio
						: null;

			if (!type) return;

			const newItem: MediaItem = {
				id: Math.random().toString(36).substring(2, 9),
				type,
				name: file.name,
				url: URL.createObjectURL(file),
				thumbnail: type === MEDIA_TYPES.image ? URL.createObjectURL(file) : undefined,
				duration: type !== MEDIA_TYPES.image ? 0 : undefined,
				createdAt: Date.now()
			};

			mediaItems = [newItem, ...mediaItems];
		});
	};

	const handleAddToTimeline = (media: MediaItem) => {
		const trackType = media.type;

		let track = tracks.find((t) => t.type === trackType);

		if (!track) {
			const [trackId] = addTrack(trackType);

			track = {
				id: trackId,
				type: trackType,
				name: `${trackType} Track`,
				contents: []
			};
		}

		addTrackContent(track.id, {
			mediaId: media.id,
			url: media.url,
			type: media.type,
			startTime: 0,
			duration: media.duration || 5,
			objectFit: 'cover',
			selected: true
		});
	};
</script>

<div class="space-y-4">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-semibold text-white">Media Library</h2>
		<label
			class="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
		>
			<Upload class="h-4 w-4" />
			<span class="text-sm">Upload</span>
			<input
				type="file"
				multiple
				accept="image/*,video/*,audio/*"
				onchange={handleFileUpload}
				class="hidden"
			/>
		</label>
	</div>

	<div class="relative">
		<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
		<input
			type="text"
			placeholder="Search media..."
			value={searchTerm}
			onchange={(e) => (searchTerm = e.target.value)}
			class="w-full rounded-lg bg-gray-900 py-2 pl-10 pr-4 text-white placeholder-gray-400"
		/>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each filteredItems as item (item.id)}
			<div class="group overflow-hidden rounded-lg bg-gray-900">
				<div class="relative aspect-video bg-black">
					{#if item.thumbnail}
						<img src={item.thumbnail} alt={item.name} class="h-full w-full object-cover" />
					{:else}
						<div class="flex h-full w-full items-center justify-center text-gray-600">
							No Preview
						</div>
					{/if}
					<button
						onclick={() => handleAddToTimeline(item)}
						class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100"
					>
						<Plus class="h-8 w-8 text-white" />
					</button>
				</div>
				<div class="p-2">
					<p class="truncate text-sm font-medium text-white">{item.name}</p>
					<p class="text-xs text-gray-400">{new Date(item.createdAt).toLocaleDateString()}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
