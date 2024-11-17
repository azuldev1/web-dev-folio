<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { createScene, onWindowResize } from './ScreenSaverScene';

	let sceneEl = new HTMLCanvasElement();

	onMount(() => {
		createScene(sceneEl);
		window.addEventListener('resize', onWindowResize, false);
	});
</script>

<canvas id="scene" bind:this={sceneEl}> </canvas>

<style>
	#scene {
		position: fixed;
		top: 0;
		left: 0;
		width: vw;
		height: vh;
		background: none;
		z-index: -1;
	}
</style>
