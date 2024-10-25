<script>
	import CardContainer from '$lib/components/CardContainer.svelte';
	import SvgLaptop from '$lib/components/SvgLaptop.svelte';
	import ScreenSaver from '$lib/components/ScreenSaver.svelte';
</script>

<main class="bg-gradient-to-b from-purple-500 to-white min-h-screen p-8">
	<div class="container mx-auto">
		<div class="mainContainer flex flex-col gap-y-12 lg:gap-y-16">
			<!-- <ScreenSaver /> -->
			<div class="hero-section">
				<div class="shape-wrapper">
					<SvgLaptop />
				</div>
				<div class="text-content">
					<h1
						class="mb-0 font-semibold font-mono text-4xl lg:text-5xl xl:text-6xl leading-relaxed tracking-wide"
					>
						Web<br class="hidden lg:inline" /> Developer
					</h1>
					<h1
						class="mt-3 font-medium font-mono text-2xl lg:text-2xl xl:text-3xl leading-relaxed tracking-wider"
					>
						Manuel Alvarez-Zumárraga
					</h1>
					<p
						class="mt-6 mb-0 text-xl lg:text-lg xl:text-2xl leading-relaxed tracking-wide text-gray-700"
					>
						<span class="font-bold text-lg lg:text-xl xl:text-2xl block mb-1 text-purple-400"
							>Welcome to my coding space!</span
						>
						I'm a developer who enjoys blending creativity with functionality. From sleek websites to
						vibrant apps and engaging animations. Dive into the world of beautiful, functional design
						with me, and let's create something extraordinary together!
					</p>
				</div>
			</div>
			<div class="md:flex justify-center mt-10 md:mt-12 lg:mt-28">
				<div class="container mx-auto max-w-3xl lg:max-w-5xl">
					<CardContainer />
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.mainContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	:global(#LaptopSVG) {
		max-width: 100%;
		height: auto;
	}

	.hero-section {
		position: relative;
		height: 100%;
	}
	.text-content {
		text-align: center;
		padding: 0 2rem;
	}

	.shape-wrapper {
		display: none;
		shape-outside: polygon(
			/* Top-left */ 20% 20%,
			/* Upper-left curve */ 25% 40%,
			/* Mid-left */ 20% 60%,
			/* Lower-left curve */ 10% 75%,
			/* Bottom-left */ 30% 90%,
			/* Bottom-middle */ 50% 95%,
			/* Bottom-right */ 70% 80%,
			/* Lower-right */ 85% 60%,
			/* Middle-right */ 90% 35%,
			/* Upper-right */ 75% 15%,
			/* Top-right */ 50% 5% /* Top-middle */
		);
		shape-margin: 6%;
		float: right;
	}
	.hero-section::after {
		content: '';
		display: table;
		clear: both;
	}

	/* Large devices (lg) */
	@media (min-width: 1024px) {
		.shape-wrapper {
			display: inline-block;
			width: 500px;
		}
		.text-content {
			padding: 25px 10px 0 10px;
			text-align: right;
		}
	}
	/* Halfway between lg and xl */
	@media (min-width: 1152px) {
		.shape-wrapper {
			display: inline-block;
			shape-margin: 7%;
			width: 575px;
		}
		.text-content {
			padding: 80px 15px 0 15px;
			text-align: right;
		}
	}

	/* Extra large devices (xl) */
	@media (min-width: 1280px) {
		/* Styles for extra large devices and up */
		.shape-wrapper {
			display: inline-block;
			shape-margin: 7%;
			width: 600px;
		}
		.text-content {
			padding: 60px 15px 0 15px;
			text-align: right;
			max-width: 1200px;
		}
	}
	/* Halfway between xl and 2xl */
	@media (min-width: 1408px) {
		/* Styles for extra large devices and up */
		.shape-wrapper {
			display: inline-block;
			shape-margin: 8%;
			width: 700px;
		}
		.text-content {
			padding: 90px 40px 0 40px;
			text-align: right;
			max-width: 1250px;
		}
	}
</style>
