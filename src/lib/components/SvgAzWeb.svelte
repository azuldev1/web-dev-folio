<script>
	export let width = 65; // Default width
	export let height = 65; // Default height
</script>

<svg
	id="Layer_2"
	data-name="Layer 2"
	class="hover-effect"
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 40.637 38.491"
>
	<g id="outline">
		<path
			id="outline-2"
			data-name="outline"
			class="cls-2"
			d="m39.637,3.666v31.155c0,1.473-1.193,2.67-2.666,2.67H3.67c-1.473,0-2.67-1.198-2.67-2.67V3.666c0-1.473,1.198-2.666,2.67-2.666h33.301c1.473,0,2.666,1.193,2.666,2.666Z"
		/>
		<line id="top_bar" class="cls-1" x1="1" y1="7.127" x2="39.637" y2="7.127" />
	</g>
	<g id="chars">
		<path id="underScore" class="cls-1" d="m34.879,31.618v2.258h-8.247v-2.258h8.247Z" />
		<path
			id="letterM"
			class="cls-3"
			d="m5.337,12.572h3.941l5.538,7.882,5.538-7.882h3.889v18.648h-4.095v-7.469c0-1.545.026-3.297.052-4.662h-.052c-.876,1.313-1.803,2.678-2.73,3.992l-2.705,3.838-2.705-3.838c-.927-1.314-1.855-2.679-2.73-3.992h-.052c.026,1.365.052,3.117.052,4.662v7.469h-3.941V12.572Z"
		/>
		<path
			id="letterZ"
			class="cls-3 smLetters"
			d="m35.22,19.45l-.022.011-6.009-3.279-.022.011v2.938h-1.915v-6.548l.022-.011,6.008,3.279.022-.011v-3.191h1.915v6.801Z"
		/>
		<path
			id="letterA"
			class="cls-3 smLetters"
			d="m27.252,26.094v-2.344l7.967-3.169v2.465l-1.629.561v2.729l1.629.583v2.344l-7.967-3.169Zm4.666-1.904l-.759.264c-.451.154-1.002.341-1.486.484v.022c.495.154,1.045.341,1.507.506l.737.264v-1.541Z"
		/>
	</g>
</svg>

<style>
	.hover-effect:hover .cls-1,
	.hover-effect:hover .cls-2,
	.hover-effect:hover .cls-3 {
		stroke: var(--on-primary-hover); /* Light gray color */
	}
	.hover-effect:hover #chars path {
		fill: var(--on-primary-hover); /* Light gray color */
	}
	.cls-3 {
		fill: var(--on-primary);
		stroke-width: 0px;
	}
	.cls-1 {
		stroke-width: 0.75px;
	}

	.cls-1,
	.cls-2 {
		fill: none;
		stroke: var(--on-primary);
		stroke-miterlimit: 10;
	}

	.cls-2 {
		stroke-width: 2px;
	}
</style>
