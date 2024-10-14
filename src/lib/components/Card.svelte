<script>
	export let icon;
	export let title;
	export let description;
	export let sections;
	export let isFirst = false;
	export let isLast = false;
	export let index;
	export let isSet = true; // New prop to determine if it's part of a set
	export let totalCards; // New prop for total number of cards

	// Function to determine width based on index and total cards
	function getWidth(index, total) {
		if (!isSet) return 'w-full';
		if (total <= 2) return 'lg:w-1/2';
		if (total === 3) return 'lg:w-1/3';
		if (total === 4) return 'lg:w-1/4';
		if (total >= 5) {
			if (index === 0 || index === total - 1) return 'lg:w-1/4';
			return 'lg:w-1/6';
		}
		return 'lg:w-full'; // Default case
	}
</script>

<div
	class={`
	flex-1 bg-white p-4 text-center flex flex-col items-center
	border-gray-400 border-solid border-4 rounded-[3rem]
	${getWidth(index, totalCards)}
	${isSet && isFirst ? 'border-b-0 rounded-b-none lg:rounded-r-none lg:border-r-0' : ''}
	${isSet && isLast ? 'lg:rounded-l-none rounded-t-none' : ''}
	${
		isSet && !isFirst && !isLast
			? 'rounded-b-none rounded-t-none lg:border-r-0 lg:rounded-r-none'
			: ''
	}
	${isSet ? '' : 'w-full'}
`}
>
	<div class="bg-teal-500 w-[5.2rem] h-[5.2rem] rounded-full mb-4 flex items-center justify-center">
		<span class="material-icons text-5xl text-white">
			{icon}
		</span>
	</div>
	<h2 class="text-lg font-bold mb-2">{title}</h2>
	<p class="text-gray-600 mb-4">{description}</p>
	{#each sections as section}
		<div class="text-left mb-4">
			<h3 class="font-semibold text-purple-600 mb-1">{section.heading}</h3>
			<ul class="list-disc list-inside text-gray-700">
				{#each section.items as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
