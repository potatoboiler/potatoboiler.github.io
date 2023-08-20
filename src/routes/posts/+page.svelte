<script>
    export let data;
</script>

<h1>Posts</h1>
<ul>
    {#each data.posts as metadata, content}
        <li><a href={metadata.path}>{metadata.meta.date} - {metadata.meta.title}</a></li>
    {/each}
</ul>
