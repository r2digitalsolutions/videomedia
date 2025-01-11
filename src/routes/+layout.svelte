<script lang="ts">
	import '../app.css';
	import { i18n } from '@r2digisolutions/ui';

	let { children, data } = $props();

	i18n.init({
		language: data.language,
		translations: data.translations
	});
</script>

{@render children()}
