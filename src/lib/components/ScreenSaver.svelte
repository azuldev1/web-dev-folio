<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { createScene, onWindowResize } from './ScreenSaverScene';

	let sceneEl: HTMLCanvasElement;

	onMount((): (() => void) | void => {
		if (browser) {
			// Create a canvas element
			sceneEl = document.createElement('canvas') as HTMLCanvasElement;
			// Manually set the class
			sceneEl.className = 'screen-saver';
			// Append the canvas to the body or a specific container
			document.body.appendChild(sceneEl);

			// Initialize the 3D scene
			createScene(sceneEl);

			// Handle window resize
			window.addEventListener('resize', onWindowResize, false);

			// Cleanup on component destroy
			return () => {
				window.removeEventListener('resize', onWindowResize, false);
				sceneEl?.remove(); // Remove the canvas from the DOM
			};
		}
	});
</script>

<canvas id="scene" class="screen-saver" bind:this={sceneEl}></canvas>

<style global>
	.screen-saver {
		position: fixed;
		top: 0;
		left: 0;
		background: none;
		z-index: -1;
	}
</style>
