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
  <a href="/profile/"><button type="button">Profile</button></a>

</div>

<style>

  button{
      margin: 20px auto;
      font-family: 'Indie Flower', cursive;
      padding: 2px 16px;
      font-size: 1.4em;
      background-color: rgb(111,26,7);
      color: white;
      border: none;
  }
  #created-meme-display{
    width: 80%;
    margin: 0 auto;
  }
  img{
    width: 100%;
  }
  @media only screen and (min-width: 700px) {
    #created-meme-display{
    width: 40%;
    margin: 0 auto;
    }
    button{
      margin: 20px auto 40px;
    }
  }
  @media only screen and (min-width: 900px) {
    button{
      font-size: 2em;
    }
    #created-meme-display{
    width: 30%;
    margin: 0 auto;
    }
  }
</style>
