import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { globSync } from 'glob';
import { mdsvex } from 'mdsvex';

const fetchMarkdownPrerenderPaths = () => {
	return globSync('./src/posts/*.md')
		.map((path) => path.replace(/^.*[\\\/]/, '').slice(0, -3))
		.map((post) => '/posts/' + post)
}

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({ extensions: ['.md'] }),
		vitePreprocess(),
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			entries:
				[]
					.concat(fetchMarkdownPrerenderPaths())
					.concat(['/'])
		},
	},
};