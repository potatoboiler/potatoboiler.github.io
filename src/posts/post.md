---
title: Frustrations with SvelteKit and adapter-static
date: "2023-08-20"
---
Spent an inordinately long time watching Family Guy and poring over a guide to figure out why I was getting two errors.
The first concerned the prerenderer being unable to find `/posts/[slug]`. 

The fix:
```js
export default {
	..configStuff
	kit: {
		adapter: adapter(),
		prerender: { entries: ['/posts/post_name'], },
	},
};
```

The incorrect version I was staring at:
```js
export default {
	..configStuff
	kit: {
		adapter: adapter(),
	},
    prerender: { entries: ['/posts/post_name'], },
};
```

Also, Vite(?) doesn't pick up `svelte.config.ts`, only `svelte.config.js`.