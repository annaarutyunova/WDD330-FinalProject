<script>
  import { onMount } from 'svelte';

  export let createdMeme;

  function init() {
    console.log(createdMeme);
  }

  onMount(init);
</script>

<div id="created-meme-display">
  <img src={createdMeme.url} alt="your created meme" />
  <button type="button">Save</button>
</div>
