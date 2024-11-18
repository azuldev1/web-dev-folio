import adapterStatic from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapterStatic(),
    paths: {
      base: dev ? '' : '' // Leave base path empty for a root-level custom domain
    }
	}
};
