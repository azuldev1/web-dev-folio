<script>
	import { scrollTo } from '../../actions/scrollTo';
	export let scrollToId = '';
	export let customClass = '';
</script>

<svg
	use:scrollTo={scrollToId}
	class={customClass}
	id="Layer_2"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 35.39 36.19"
>
	<defs>
		<style>
			.cls-1 {
				fill: none;
				stroke: #68a6a6;
				stroke-linecap: round;
				stroke-linejoin: round;
				stroke-width: 1.3px;
			}

			.cls-2 {
				fill: #90d1d1;
			}

			.cls-3 {
				fill: #b3a1eb;
			}
		</style>
	</defs>
	<g id="Layer_1-2" data-name="Layer_1">
		<g>
			<g>
				<path
					class="cls-3"
					d="M9.82,22.76c.43-.21.91.15.87-.43-1.26-1.97-7.63-15.09-7.55-16.19.01-.19.47-.97.71-1.13.08-.02,1.52.06,1.59.08,1.23.3,5.45,4.3,6.29,4.61.05.02,1.04.03,1.13-.08,1.7,1.43,3.29,2.96,5.05,4.32.02.02.04.04.06.05-.67.48-1.46,1.37-2.31.95-.72.29,1.91,2.42,4.19,1.25.99-.5,1.34-2.01,3.02-3.44,2-1.08,3.72-3.02,5.37-4.22,1.32-.97,3.6-2.49,5.28-2.11-.08.26.08.6-.08,1.09-3.93,9.77-8.49,19.38-14.82,28.04-.14.07-1.89-2.03-2.04-2.23-1.13-1.51-5.45-8.38-6.78-10.56Z"
				/>
				<path
					class="cls-2"
					d="M33.54,6.41c-1.67-.38-3.96,1.15-5.28,2.11-1.64,1.21-3.37,3.14-5.37,4.22-1.68,1.43-2.03,2.94-3.02,3.44-2.28,1.17-4.91-.96-4.19-1.25.84.43,1.63-.47,2.31-.95-.02-.02-.04-.04-.06-.05.02.02.04.04.06.05.28.22.54.47.82.69,2.82-2.36,11.67-11.31,13.48-12.58.18-.13,1.64-.92,1.74-.89,1.43,2.3.42,2.41-.49,5.21Z"
				/>
				<path
					class="cls-2"
					d="M9.82,22.76C6.23,16.88.83,7.28.65.65c4.56,2.36,8.35,5.72,12.22,8.97-.09.1-1.08.1-1.13.08-.84-.32-5.06-4.31-6.29-4.61-.08-.02-1.52-.1-1.59-.08-.25.17-.7.94-.71,1.13-.08,1.09,6.28,14.22,7.55,16.19.04.58-.44.22-.87.43Z"
				/>
			</g>
			<path
				class="cls-1"
				d="M18.81,14.68c2.82-2.36,11.67-11.31,13.48-12.58.18-.13,1.64-.92,1.74-.89,1.43,2.3.42,2.41-.49,5.21-.08.26.08.6-.08,1.09-3.93,9.77-8.49,19.38-14.82,28.04-.14.07-1.89-2.03-2.04-2.23-1.13-1.51-5.45-8.38-6.78-10.56C6.23,16.88.83,7.28.65.65c4.56,2.36,8.35,5.72,12.22,8.97,1.7,1.43,3.29,2.96,5.05,4.32.02.02.04.04.06.05.28.22.54.47.82.69Z"
			/>
		</g>
	</g>
</svg>

<style>
	.animated-long-arrow {
		animation: arrow-bounce 1.5s infinite ease-in-out;
	}
	/* Hover effects */
	.animated-long-arrow:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.animated-long-arrow:hover path {
		stroke-width: 1.2;
	}
	/* Update the hover state to work with the bounce animation */
	.animated-long-arrow:hover {
		--scale: 1.5;
	}
	@keyframes arrow-bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(4vh); /* Use viewport height unit to make it responsive */
		}
	}
</style>
