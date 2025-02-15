export const prerender = true; // Enable SSG

export async function load() {
	// Fetch articles from dev.to API
	const devToUsername = 'manuelalzzum'; // Replace with your dev.to username
	try {
		const response = await fetch(`https://dev.to/api/articles?username=${devToUsername}`, {
			headers: {
				accept: 'application/vnd.forem.api-v1+json'
			}
		});
		console.log('from the loaddd');
		console.log(response);

		if (!response.ok) {
			throw new Error('Failed to fetch dev.to posts');
		}

		const articles = await response.json();
		console.log(articles);

		// Transform dev.to articles into your posts format
		const posts = articles.map((article) => ({
			title: article.title,
			excerpt: article.description,
			date: new Date(article.published_at).toISOString().split('T')[0],
			url: article.url,
			image: article.cover_image || '/default-cover.jpg' // Use cover image if available
		}));

		const projects = [
			// {
			// 	title: 'Project 1',
			// 	description: 'Description of project 1',
			// 	image: '/path/to/image1.jpg',
			// 	url: '/projects/project-1'
			// }
			// Add more projects...
		];

		return {
			projects,
			posts
		};
	} catch (error) {
		console.error('Error fetching dev.to posts:', error);
		// Return empty arrays as fallback
		return {
			projects: [],
			posts: []
		};
	}
}
