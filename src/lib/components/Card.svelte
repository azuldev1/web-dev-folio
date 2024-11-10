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
	flex-1 bg-white pt-4 px-3 md:pt-7 md:px-7 text-center flex flex-col items-center
	border-gray-400 border-solid border-4 rounded-[3rem]
	${getWidth(index, totalCards)}
	${
		isSet && isFirst
			? 'border-b-0 rounded-b-none lg:rounded-r-none lg:border-r-0 lg:border-b-4 lg:rounded-bl-[3rem]'
			: ''
	}
	${isSet && isLast ? 'rounded-t-none lg:rounded-l-none lg:rounded-tr-[3rem]' : ''}
	${
		isSet && !isFirst && !isLast
			? 'rounded-b-none rounded-t-none lg:border-r-0 lg:rounded-r-none'
			: ''
	}
	${isSet ? '' : 'w-full'}
`}
>
	<div
		class="bg-on-primary w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] rounded-full mb-4 flex items-center justify-center"
	>
		<span class="material-icons text-3xl md:text-4xl text-white">
			{icon}
		</span>
	</div>
	<h2 class="text-xl md:text-2xl font-bold mb-2">{title}</h2>
	<p class="text-gray-600 mb-4 text-center md:min-h-[80px] leading-normal md:leading-relaxed">
		{description}
	</p>
	{#each sections as section}
		<div class="text-center mb-1 w-full md:min-h-[135px]">
			<h3 class="font-semibold text-purple-600 mb-1">{section.heading}</h3>
			{#if section.itemsInline}
				<ul class="text-gray-700 list-none p-0 flex flex-wrap justify-center gap-3">
					{#each section.itemsInline as item}
						<li class="bg-gray-100 px-2 py-1 rounded-full">{item}</li>
					{/each}
				</ul>
			{:else if section.items}
				<ul class="text-gray-700 list-none p-0 space-y-1 md:space-y-2">
					{#each section.items as item}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</div>
