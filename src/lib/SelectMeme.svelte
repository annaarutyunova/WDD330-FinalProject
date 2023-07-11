<script>
  import { onMount } from 'svelte';
  import {
    checkLocalStorage,
    getLocalStorage,
    isExpired,
    setLocalStorage,
  } from '../js/cache.mjs';

  let apiUrl = 'https://api.imgflip.com/get_memes';
  let images = [];
  export let image;

  async function getImages() {
    if (checkLocalStorage('images')) {
      let tempImages = getLocalStorage('images');
      if (!isExpired(tempImages)) {
        images = tempImages.images;
      } else fetchImages();
    } else {
      fetchImages();
    }
  }

  async function fetchImages() {
    console.log('fetching data');
    const response = await fetch(apiUrl);
    if (response.ok) {
      let data = await response.json();
      images = data.data.memes;
      setLocalStorage('images', {
        images: [...data.data.memes],
        date: new Date(),
      });
    }
  }

  function handleImgClick(event) {
    let selectedImgUrl = event.target.src;
    console.log(selectedImgUrl);
  }

  onMount(getImages);
</script>

<div id="images">
  {#await images}
    <h3>Loading</h3>
  {:then imageCollection}
    {#each imageCollection as image}
      <div class="image-block">
        <img
          src={image.url}
          alt={image.name}
          on:click|preventDefault={handleImgClick}
        />
      </div>
    {/each}
  {/await}
</div>

<style>
  #images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    align-items: center;
    justify-items: center;
  }
  .image-block img {
    width: 100%;
  }
</style>
