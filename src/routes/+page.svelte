<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import ScreenSaver from '$lib/components/ScreenSaver.svelte';
</script>

<LayoutGrid>
	<ScreenSaver />
	<Cell span={6} align="middle">
		<h1 class="m-0 text-4xl">Manuel Alvarez-Zumárraga</h1>
		<h1 class="mt-4 mb-0 biggie font-light text-4xl">Experienced Software Engineer</h1>
		<p class="mt-4 mb-0 text-lg font-normal">
			I'm skilled at shaping complex ideas into intuitive digital experiences, seamlessly bridging
			the gap between technical complexity and user-friendly functionality.
		</p>
	</Cell>
	<Cell span={6} align="middle">
		<h1>Page not found</h1>
		<p>Sorry, we couldn't find what you were looking for.</p>
	</Cell>
</LayoutGrid>

<style>
	.biggie {
		font-size: 2.5rem;
	}
</style>
