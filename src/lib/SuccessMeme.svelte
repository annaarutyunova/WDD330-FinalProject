<script>
  import { onMount } from 'svelte';
  import { saveMeme } from '../js/supabaseClient.mjs';
  import { userStore } from '../js/stores.mjs';

  export let createdMeme;

  function init() {
    console.log(createdMeme.url);
  }

  function handleSave(){
    console.log("User Store", $userStore.user.id)
    saveMeme(createdMeme.url, $userStore.user.id);
  }

  onMount(init);
</script>

<div id="created-meme-display">
  <img src={createdMeme.url} alt="your created meme" />
  <button type="button" on:click={handleSave}>Save</button>
</div>
