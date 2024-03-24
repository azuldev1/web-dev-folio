<!-- Card.svelte -->
<div class="card">
	<div class="header">
		<slot name="header" />
	</div>
	<div class="body">
		<slot />
	</div>
	<div class="footer">
		<slot name="footer" />
	</div>
</div>

<style>
	/* Styles for the card component itself */
	.card {
		border: 2px solid var(--outlineStroke);
		padding: 2em 3.5em;
		border-radius: 30px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		background-color: #fff;
	}

	/* Styles for the header slot content */
	.header ::slotted(*) {
		background-color: #f0f0f0;
		padding: 12px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		display: inline-flex;
	}
	:global(.header *) {
		display: inline-block !important;
	}
	:global(.header .material-icons) {
		padding-right: 0.5em;
	}

	/* Styles for the footer slot content */
	.footer ::slotted(*) {
		background-color: #f0f0f0;
		padding: 12px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
</style>
