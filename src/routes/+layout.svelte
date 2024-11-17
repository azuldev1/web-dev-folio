<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/global.css';

	let prominent = true;
	let dense = false;
</script>

<div class="flex flex-col min-h-screen">
	<div class="top-app-bar-container">
		<Navbar />
	</div>
	<div class="mx-1 md:mt-4.5 md:mx-3 lg:mx-4 flex-grow pt-8 md:pt-10">
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
	.footer {
		text-align: center;
		padding: 10px;
		width: 100%;
	}
</style>
