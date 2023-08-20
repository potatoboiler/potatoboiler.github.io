<script>
    export let data;
</script>

<ul>
    {#each data.posts as metadata, content}
        <li><a href={metadata.path}>{metadata.meta.date} - {metadata.meta.title}</a></li>
    {/each}
    <li>test</li>
</ul>
