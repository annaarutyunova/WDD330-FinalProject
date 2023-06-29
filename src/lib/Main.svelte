<script>
    let screenSize;
</script>
<svelte:window bind:innerWidth={screenSize} />

<h1 id="welcome">Welcome to the jungle of meme</h1>
    {#if screenSize < 500}
        <img id="welcomeMeme1" src="https://media.tenor.com/OeswMjtpFdQAAAAM/cat.gif" alt="cat smilling"/>
        <a id="logoPhone" href="#" ><p>Sign In</p></a>
    {/if}
    {#if screenSize >= 500}
        <div id="welcomeMemes">
            <img id="welcomeMeme1" src="https://media.tenor.com/OeswMjtpFdQAAAAM/cat.gif" alt="cat smilling"/>
            <img id=welcomeMeme2 src="https://media.tenor.com/fREyFxrehi0AAAAd/cat-lick-cat.gif" alt="cat lick">
        </div>
    {/if}
