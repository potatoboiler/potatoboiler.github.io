import { fetchMarkdownPosts } from '$lib/utils.js';

export async function load({ params }) {
    return { posts: await fetchMarkdownPosts() }
}