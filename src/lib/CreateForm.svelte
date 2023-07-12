<script>
  import SelectMeme from './SelectMeme.svelte';
  import TextMeme from './TextMeme.svelte';

  let img;

  function previousSlide() {
    img = undefined;
  }
</script>

<h1 id="createMemeHeader">Create a new meme</h1>
<form on:submit|preventDefault={(event) => console.log(event)}>
  {#if img === undefined || img === null}
    <SelectMeme bind:image={img} />
  {:else}
    <TextMeme image={img} prevSlide={previousSlide} />
  {/if}
</form>

<style>
  #createMemeHeader {
    text-align: center;
  }
</style>
