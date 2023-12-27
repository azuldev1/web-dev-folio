<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import ScreenSaver from '$lib/components/ScreenSaver.svelte';
</script>

<LayoutGrid>
	<Cell span={12}>
		<ScreenSaver />
		<h1>Page not found</h1>
		<p>Sorry, we couldn't find what you were looking for.</p>
	</Cell>
</LayoutGrid>

<LayoutGrid>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</LayoutGrid>

<style>
	.mainSection {
		height: 90vh;
	}
</style>
