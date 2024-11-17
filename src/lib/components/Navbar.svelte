<script>
	import { onMount } from 'svelte';
	import Weblogo from '$lib/components/SvgAzWeb.svelte';
	import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
	function handleLogoClick() {
		console.log('Logo clicked');
		goto('/'); // Navigate to the homepage
	}
</script>

<nav>
	<div class="container mx-auto">
		<div
			role="button"
			tabindex="0"
			class="cursor-pointer"
			on:click={handleLogoClick}
			on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? handleLogoClick() : null)}
		>
			<Weblogo />
		</div>
		<button class="menu-toggle cursor-pointer" on:click={toggleMenu}>
			{#if menuOpen}
				<!-- SVG for "X" icon -->
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
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<!-- SVG for hamburger icon -->
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
			{/if}
		</button>
		<div class="menu {menuOpen ? 'open' : ''}">
			<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
			<a
				href="https://www.linkedin.com/in/manuelalvarezzumarraga"
				class="icon-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>LinkedIn</span>
				<Fa icon={faLinkedin} size="2x" class="icon" />
			</a>
			<a
				class="icon-link"
				href="https://codepen.io/azuldev1"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>CodePen</span>
				<Fa icon={faCodepen} size="2x" class="icon" />
			</a>
			<a
				class="icon-link"
				href="https://github.com/azuldev1"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>GitHub</span>
				<Fa icon={faGithub} size="2x" class="icon" />
			</a>
		</div>
	</div>
</nav>

<style>
	.active {
		font-weight: bold;
		color: var(--on-primary-active); /* Adjust this color as needed */
	}
	.container {
		display: flex;
		height: var(--navbar-height);
		align-items: center;
		justify-content: space-between;
		color: var(--on-primary);
		padding: 1rem;
	}
	.menu-toggle {
		border: 1px solid var(--on-primary);
		background-color: transparent;
		color: var(--on-primary);
		border-radius: 4px;
		display: block; /* Show toggle button on small screens */
		outline: none;
	}
	/* CSS rules for small screens go here */
	.menu.open {
		position: absolute; /* Show menu when open */
		left: 0;
		top: 110px;
		width: 100%;
		background-color: var(--on-surface-lighter);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		z-index: 100;
	}
	.menu.open a {
		width: 100%;
		padding: 2.25rem 1.2rem;
		justify-content: center;
		background-color: var(--on-surface-lighter);
	}
	.menu.open a {
		border-top: 0.75px solid var(--on-primary); /* Add a border-bottom */
	}
	.menu.open a:last-child {
		border-bottom: 4px solid var(--on-primary); /* Add a border-bottom */
	}
	.menu {
		display: none; /* Hidden by default */
		flex-direction: column; /* Stack items vertically */
		width: 100%; /* Full width */
	}
	.menu.open {
		display: flex; /* Show menu when open */
	}
	.icon-link span {
		display: inline; /* Show text on small screens */
	}
	.menu a {
		display: inline-flex; /* Ensure links take full width */
		padding: 0.5rem 1rem; /* Add padding for better touch targets */
		text-align: center; /* Center text */
		align-items: center;
	}

	@media (min-width: 768px) {
		.menu-toggle {
			display: none; /* Hide toggle button on larger screens */
		}
		.menu {
			display: flex; /* Show menu on larger screens */
			flex-direction: row; /* Align items horizontally */
			justify-content: flex-end;
		}
		.icon-link span {
			display: none; /* Hide text by default */
		}
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
