<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Weblogo from '$lib/components/WebLogo.svelte';

	let prominent = false;
	let dense = false;
	let secondaryColor = false;
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
		<div class="flexor-content">
			<slot />
		</div>
	</div>
</div>

<style>
	:global(body) {
		background-color: none !important;
		/* diameter of the circle */
		--d: 2px;

		background: radial-gradient(
				circle at var(--d) var(--d),
				#696969 calc(var(--d) - 5px),
				#ffffff var(--d)
			)
			0 0 / 40px 40px;
	}
	:global(.transparent-bar) {
		background-color: transparent !important;
		width: 100%;
		height: 100%;
		z-index: -10;
	}
	.top-app-bar-container {
		width: 100%;
		height: 320px;
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
	}

	.flexor {
		display: inline-flex;
		flex-direction: column;
	}

	.flexor-content {
		flex-basis: 0;
		height: 0;
		flex-grow: 1;
		overflow: auto;
		margin: 4px 12px;
	}
</style>
