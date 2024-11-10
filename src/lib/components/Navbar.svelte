<script>
	import { onMount } from 'svelte';
	import Weblogo from '$lib/components/SvgAzWeb.svelte';
	import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<nav>
	<div class="container mx-auto">
		<div>
			<Weblogo />
		</div>
		<button class="menu-toggle" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
		<div class="menu {menuOpen ? 'open' : ''}">
			<a href="#" class="self-center">About</a>
			<a
				href="https://www.linkedin.com/in/manuelalvarezzumarraga"
				class="icon-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Fa icon={faLinkedin} size="2x" class="icon" />
			</a>
			<a href="https://codepen.io/azuldev1" target="_blank" rel="noopener noreferrer">
				<Fa icon={faCodepen} size="2x" class="icon" />
			</a>
			<a href="https://github.com/azuldev1" target="_blank" rel="noopener noreferrer">
				<Fa icon={faGithub} size="2x" class="icon" />
			</a>
		</div>
	</div>
</nav>

<style>
	nav {
		padding: 1rem; /* Tailwind utility for p-4 */
	}
	.container {
		display: flex;
		height: var(--navbar-height);
		align-items: center;
		justify-content: space-between;
		color: var(--on-primary);
	}
	.menu-toggle {
		@media (min-width: 768px) {
			display: none; /* Tailwind utility for md:hidden */
		}
		outline: none;
	}
	.menu {
		display: none; /* Tailwind utility for hidden */
	}
	@media (min-width: 768px) {
		.menu {
			display: flex; /* Tailwind utility for md:flex */
			gap: 1.5rem; /* Tailwind utility for space-x-6 */
		}
	}
	.menu.open {
		display: block; /* Tailwind utility for block */
	}
	a {
		display: inline-block;
		color: var(--on-primary);
		transition: color 0.3s;
	}
	a:hover {
		color: var(--on-primary-hover); /* Tailwind utility for hover:text-blue-200 */
	}
	:global(.icon) {
		margin-left: 0.5rem;
		transition:
			background-color 0.3s,
			transform 0.3s;
		padding: 0.5rem;
		border-radius: 50%;
	}
	:global(.icon:hover) {
		color: var(--on-primary-hover); /* Tailwind utility for hover:bg-blue-900 */
		opacity: 0.8;
		transform: scale(1.2);
		border-radius: 50%;
	}
	a {
		color: var(--on-primary);
		transition: color 0.3s;
		text-decoration: none;
		font-weight: 700;
	}
	a:hover {
		color: var(--on-primary-hover); /* Tailwind utility for hover:text-blue-200 */
	}
</style>
