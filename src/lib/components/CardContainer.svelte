<script>
	import Card from './Card.svelte';

	const cards = [
		{
			icon: 'web',
			title: 'Frontend Skills & Tools',
			description:
				'I prioritize choosing the best solution for each project, whether it’s building custom features from scratch or utilizing robust libraries to streamline development.',
			sections: [
				{
					heading: 'Core Skills:',
					itemsInline: ['Javascript', 'CSS', 'HTML', 'Git', 'Wireframes']
				},
				{
					heading: 'Toolset:',
					items: [
						'React',
						'Vue',
						'Svelete',
						'Next JS',
						'Nuxt Js',
						'Sass',
						'Styled Components',
						'Webpack',
						'React Context API',
						'Storybook',
						'Figma'
					]
				}
			]
		},
		{
			icon: 'web',
			title: 'Backend Skills & Tools',
			description:
				'Bridging front and backend: Delivering engaging front-end experiences with a deep understanding of REST APIs and GraphQL.',
			sections: [
				{
					heading: 'Core Skills:',
					itemsInline: ['Node.js', 'SQL', 'NoSQL', 'GraphQL API', 'AWS', 'Docker']
				},
				{
					heading: 'Toolset:',
					items: [
						'Express js',
						'REST APIs Architecture',
						'Postman',
						'Mongoose',
						'GraphQL',
						'Apollo',
						'PostgreSQL',
						'Sequelize',
						'pgAdmin',
						'Gitlab CI/CD',
						'Lambda Functions',
						'Docker Containerization'
					]
				}
			]
		}
	];

	export let isSet = true;
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
