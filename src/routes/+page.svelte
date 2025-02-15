<script>
	import CardContainer from '$lib/components/CardContainer.svelte';
	import SvgLaptop from '$lib/components/SvgLaptop.svelte';
	import SVGArrow from '$lib/components/SVGArrow.svelte';
	import ScreenSaver from '$lib/components/ScreenSaver.svelte';
	import Fa from 'svelte-fa';
	import { faToolbox } from '@fortawesome/free-solid-svg-icons';

	// Add export let data; for SSG
	export let data;

	// Destructure the data
	const { projects, posts } = data;
</script>

<!-- there is a difference between md and lg in terms of layout -->
<main class="bg-gradient-to-b from-purple-500 to-white pb-12 lg:pb-0">
	<div class="container mx-auto">
		<div class="main-container flex flex-col gap-y-14 lg:gap-y-0">
			<ScreenSaver />

			<!-- 134px is the height of the nav -->
			<!-- 25px height of the padding in the layout -->
			<div
				id="top"
				class="px-2 md:px-12 lg:h-[calc(100vh-134px-25px)] flex justify-between flex-col"
			>
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
							class="mt-3 font-semibold font-mono text-xl md:text-2xl xl:text-3xl leading-relaxed tracking-wider"
						>
							Manuel Alvarez-Zumárraga
						</h1>
						<p
							class="md:max-w-lg lg:max-w-full px-8 mt-6 mb-0 text-lg lg:px-2 lg:text-lg xl:text-2xl leading-relaxed tracking-wide text-gray-700"
						>
							<span class="font-bold text-lg lg:text-xl xl:text-2xl block mb-1 text-purple-400"
								>Welcome to my coding space!</span
							>
							I'm a full-stack developer with a front-end focus, passionate about crafting seamless digital
							experiences. Whether it's building sleek, interactive interfaces, architecting a solid
							SQL-backed system, or packaging an app with Docker, I bring creativity and functionality
							together. I enjoy learning new technologies and staying up to date with best practices
							to continuously refine my craft.
						</p>
					</div>
				</div>
				<div class="hidden arrow-container lg:flex justify-center">
					<SVGArrow scrollToId="cardSection" customClass="h-20 w-20 pb-6 animated-arrow" />
				</div>
			</div>
			<div
				id="cardSection"
				class="px-2 md:px-12 lg:h-[calc(100vh-71px)] flex flex-col justify-center"
			>
				<div class="container mx-auto max-w-3xl lg:max-w-5xl">
					<CardContainer />
				</div>
			</div>
			<div class="hidden arrow-container lg:flex justify-center">
				<SVGArrow scrollToId="projectsAndPosts" customClass="h-20 w-20 pb-6 animated-arrow" />
			</div>

			<!-- New Projects & Posts Section -->
			<div id="projectsAndPosts" class="px-2 md:px-12 py-16">
				<div class="container mx-auto max-w-3xl lg:max-w-5xl">
					{#if projects.length > 0 || posts.length > 0}
						<h2 class="text-3xl font-mono font-semibold mb-12 text-center">Projects & Posts</h2>

						<!-- Projects Grid -->
						{#if projects.length > 0}
							<div class="mb-16">
								<h3 class="text-2xl font-mono mb-6 text-purple-500">Latest Projects</h3>
								<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{#each projects as project}
										<div class="bg-white rounded-lg shadow-lg overflow-hidden">
											<img
												src={project.image}
												alt={project.title}
												class="w-full h-48 object-cover"
											/>
											<div class="p-4">
												<h4 class="font-semibold text-lg mb-2">{project.title}</h4>
												<p class="text-gray-600 text-sm mb-4">{project.description}</p>
												<a href={project.url} class="text-purple-500 hover:text-purple-700"
													>View Project →</a
												>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<!-- Blog Posts Grid -->
						{#if posts.length > 0}
							<div>
								<h3 class="text-2xl font-mono mb-6 text-purple-500">Recent Posts</h3>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
									{#each posts as post}
										<div class="bg-white rounded-lg shadow-lg overflow-hidden">
											<img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
											<div class="p-6">
												<h4 class="font-semibold text-lg mt-2 mb-3">{post.title}</h4>
												<p class="text-gray-600 mb-4">{post.excerpt}</p>
												<div class="flex justify-between items-center">
													<a href={post.url} class="text-purple-500 hover:text-purple-700"
														>Read More →</a
													>
													<span class="text-sm text-gray-500">{post.date}</span>
												</div>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					{/if}
				</div>
			</div>
			<div class="hidden arrow-container lg:flex justify-center mb-8">
				<SVGArrow scrollToId="top" customClass="h-20 w-20 pb-6 arrow-up" />
			</div>
		</div>
	</div>
</main>

<style>
	.main-container {
		display: flex;
		align-items: center;
		height: 100%;
	}

	:global(#LaptopSVG) {
		max-width: 100%;
		height: auto;
	}

	.hero-section {
		position: relative;
	}
	.text-content {
		text-align: center;
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
			max-width: 950px;
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
			max-width: 1000px;
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
			padding: 50px 15px 0 15px;
			text-align: right;
			max-width: 1050px;
		}
	}
	/* Halfway between xl and 2xl */
	@media (min-width: 1408px) {
		/* Styles for extra large devices and up */
		.shape-wrapper {
			display: inline-block;
			shape-margin: 8%;
			width: 600px;
		}
		.text-content {
			padding: 50px 40px 0 40px;
			text-align: right;
			max-width: 1150px;
		}
	}
</style>
