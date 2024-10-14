<script>
	import CardContainer from '$lib/components/CardContainer.svelte';
	import SvgLaptop from '$lib/components/SvgLaptop.svelte';
</script>

<main class="bg-gradient-to-b from-purple-500 to-white min-h-screen p-8">
	<div class="max-w-[1300px] mx-auto">
		<div class="mainContainer flex flex-col gap-y-16">
			<!-- <ScreenSaver /> -->
			<div class="flex mt-10 md:mt-16 lg:mt-32">
				<div class="w-full md:w-1/2 px-10 md:px-10 lg:px-15 xl:px-20">
					<h1 class="m-0 text-xl lg:text-4xl">Manuel Alvarez-Zumárraga</h1>
					<h1 class="mt-4 mb-0 font-light text-xl lg:text-4xl">Experienced Software Engineer</h1>
					<p class="mt-4 mb-0 font-normal text-md lg:text-lg leading-relaxed lg:leading-loose">
						Welcome to my creative coding space! I'm a developer who enjoys blending creativity with
						functionality. From sleek websites to vibrant apps and engaging animations. Dive into
						the world of beautiful, functional design with me, and let's create something
						extraordinary together!
					</p>
				</div>
				<div class="hidden sm:block md:w-1/2 md:px-10 lg:px-20">
					<div class="flex justify-center items-center laptopContainer">
						<SvgLaptop />
					</div>
				</div>
			</div>
			<div class="md:flex justify-center mt-10 md:mt-16 lg:mt-32">
				<div class="container mx-auto max-w-5xl">
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

	.laptopContainer {
		height: max-content;
	}
	:global(#LaptopSVG) {
		max-width: 600px;
	}
</style>
