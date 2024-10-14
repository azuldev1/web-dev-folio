<script>
	import Card from './Card.svelte';

	const cards = [
		{
			icon: 'web',
			title: 'Designer',
			description:
				'I value simple content structure, clean design patterns, and thoughtful interactions.',
			sections: [
				{
					heading: 'Things I enjoy designing:',
					items: ['UX', 'UI', 'Web', 'Apps', 'Logos']
				},
				{
					heading: 'Design Tools:',
					items: ['Affinity Designer', 'Figma', 'Pen & Paper', 'Sketch']
				}
			]
		},
		{
			icon: 'web',
			title: 'Frontend Developer',
			description:
				'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
			sections: [
				{
					heading: 'Languages I speak:',
					items: ['HTML', 'Pug', 'Slim', 'CSS', 'Sass', 'Git']
				},
				{
					heading: 'Dev Tools:',
					items: [
						'Astro JS',
						'Bitbucket',
						'Bootstrap',
						'Bulma',
						'Codekit',
						'Github',
						'Netlify',
						'Tailwind CSS',
						'VS Code'
					]
				}
			]
		}
	];

	export let isSet = true;
	$: moreThanTwo = cards.length > 2;
</script>

<div class={`card-container ${isSet ? 'border-2 border-gray-400' : ''}`}>
	<div class={`${isSet ? 'flex flex-col lg:flex-row' : 'grid grid-cols-1 lg:grid-cols-3 gap-2'}`}>
		{#each cards as card, index}
			<Card
				{...card}
				{isSet}
				isFirst={isSet && index === 0}
				isLast={isSet && index === cards.length - 1}
				{index}
				totalCards={cards.length}
			/>
		{/each}
	</div>
</div>
