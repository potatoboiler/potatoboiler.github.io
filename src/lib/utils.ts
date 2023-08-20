export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('../posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver() // Discovers frontmatter properties
      const postPath = path.slice(0, -3) // TODO: make this less hacky

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}

export const listMarkdownPaths = async () => {
  return (await fetchMarkdownPosts()).map((post) => post.path)
}