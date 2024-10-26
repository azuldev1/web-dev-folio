<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Weblogo from '$lib/components/SvgAzWeb.svelte';
	import '../styles/global.css';

	let prominent = false;
	let dense = false;
</script>

<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar class="transparent-bar" variant="static" {prominent} {dense}>
			<Row>
				<Section>
					<Weblogo />
				</Section>
				<Section align="end" toolbar>
					<IconButton class="my-colored-icon-button material-icons" aria-label="Download"
						>file_download</IconButton
					>
					<IconButton class="material-icons my-colored-icon-button" aria-label="Print this page"
						>print</IconButton
					>
					<IconButton class="material-icons my-colored-icon-button" aria-label="Bookmark this page"
						>bookmark</IconButton
					>
				</Section>
			</Row>
		</TopAppBar>
	</div>
	<div class="mt-1 mx-1 mt-2 md:mt-4.5 md:mx-3 lg:mx-4 lg:mt-5">
		<slot />
	</div>
	<footer class="footer bg-gray-800 text-white">
		<p>&copy; 2024 Manuel Alvarez-Zumárraga. All rights reserved.</p>
	</footer>
</div>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
		background-color: none !important;
		/* diameter of the circle */
		--d: 2px;

		background: radial-gradient(
				circle at var(--d) var(--d),
				#242424 calc(var(--d) - 5px),
				#ffffff var(--d)
			)
			0 0 / 40px 40px;
	}
	:global(.transparent-bar) {
		background-color: transparent !important;
		overflow: auto;
	}
	.top-app-bar-container {
		width: 100%;
		overflow: auto;
		display: inline-block;
	}

	@media (max-width: 480px) {
		.top-app-bar-container {
			margin-right: 0;
		}
	}

	.flexy {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.flexor {
		display: inline-flex;
		flex-direction: column;
	}

	.flexor-content {
		flex-grow: 1;
		height: 100%;
	}
	.footer {
		text-align: center;
		padding: 10px;
		margin-top: 10vh;
		width: 100%;
		position: relative;
		bottom: 0;
	}
</style>
