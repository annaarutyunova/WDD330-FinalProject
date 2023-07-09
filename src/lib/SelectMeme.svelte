<script>
  import { onMount } from 'svelte';
  import {
    checkLocalStorage,
    getLocalStorage,
    setLocalStorage,
  } from '../js/cache.mjs';

  let apiUrl = 'https://api.imgflip.com/get_memes';
  let images = [];

  async function getImages() {
    if (checkLocalStorage('images')) {
      images = getLocalStorage('images');
    } else {
      console.log('fetching data');
      const response = await fetch(apiUrl);
      if (response.ok) {
        let data = await response.json();
        images = data.data.memes;
        setLocalStorage('images', images);
      }
    }
  }

  onMount(getImages);
</script>

<div>
  {#await images}
    <h3>Loading</h3>
  {:then imageCollection}
    {#each imageCollection as image}
      <div class="image-block">
        <img src={image.url} alt={image.name} />
      </div>
    {/each}
  {/await}
</div>
