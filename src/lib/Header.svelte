<script>
    let screenSize;
</script>
<svelte:window bind:innerWidth={screenSize} />

<div id="header">
    {#if screenSize < 500}
        <p id="logo">Memer</p>
    {/if}
    {#if screenSize >= 500}
        <p id="logo">Memer</p>
        <p id="signin">Sign In</p>
    {/if}
</div>


