<script lang="ts">
	import ScreenSaver from '$lib/components/ScreenSaver.svelte';
	import SvgLaptop from '$lib/components/SvgLaptop.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="mainContainer flex flex-col gap-y-16">
	<!-- <ScreenSaver /> -->
	<div class="heroSection flex mt-10 md:mt-16 lg:mt-32">
		<div class="w-full md:w-1/2 px-10 md:px-10 lg:px-15 xl:px-20">
			<h1 class="m-0 text-xl lg:text-4xl">Manuel Alvarez-Zumárraga</h1>
			<h1 class="mt-4 mb-0 font-light text-xl lg:text-4xl">Experienced Software Engineer</h1>
			<p class="mt-4 mb-0 font-normal text-md lg:text-lg leading-relaxed lg:leading-loose">
				Welcome to my creative coding space! I'm a developer who enjoys blending creativity with
				functionality. From sleek websites to vibrant apps and engaging animations. Dive into the
				world of beautiful, functional design with me, and let's create something extraordinary
				together!
			</p>
		</div>
		<div class="hidden sm:block md:w-1/2 md:px-10 lg:px-20">
			<div class="flex justify-center items-center laptopContainer">
				<SvgLaptop />
			</div>
		</div>
	</div>
	<div class="skillsSections flex">
		<Card>
			<div slot="header" class="flex flex-col items-center justify-center text-center">
				<span class="material-icons text-4xl mb-2 icon-circle"> tab </span>
				<h2>This is the Header</h2>
			</div>
			<p>This is the card's body content.</p>
			<div slot="footer">
				<p>This is the Footer</p>
			</div>
		</Card>
	</div>
</div>

<style>
	.icon-circle {
		font-size: 48px; /* Adjust the size of the icon as needed */
		margin-bottom: 8px; /* Add some space between the icon and the text */
		background-color: #000; /* Circle background color */
		color: #fff; /* Icon color */
		border-radius: 50%; /* Make the background a circle */
		padding: 16px; /* Adjust the padding to control the size of the circle */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mainContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.skillsSections .header {
		display: center;
	}

	.laptopContainer {
		height: max-content;
	}
	:global(#LaptopSVG) {
		max-width: 600px;
	}

	/* Small screens (≥ 640px) */
	/* CSS styles for small screens */
	.heroSection {
		height: 25vh;
	}
	.skillsSection {
		height: 25vh;
	}

	/* Medium screens (≥ 768px) */
	@media (min-width: 768px) {
		.heroSection {
			height: 30vh;
		}
		.skillsSection {
			height: 30vh;
		}
	}

	/* Large screens (≥ 1024px) */
	@media (min-width: 1024px) {
		/* CSS styles for large screens */
		.heroSection {
			height: 50vh;
		}
		.skillsSection {
			height: 50vh;
		}
	}
</style>
