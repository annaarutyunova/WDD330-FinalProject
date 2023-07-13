<script>
  import SelectMeme from './SelectMeme.svelte';
  import TextMeme from './TextMeme.svelte';
  import SuccessMeme from './SuccessMeme.svelte';
  import { stringify } from 'qs';

  let img;
  let createdMeme;

  function previousSlide() {
    img = undefined;
  }

  async function onSubmit(event) {
    console.log(event);
    let formData = new FormData(event.target);
    let params = createRequestUrlParams(formData);
    createdMeme = await sendCreateMemeRequest(params, {
      method: 'POST',
    });
    // console.log(createdMeme);
  }

  function createRequestUrlParams(formData) {
    return stringify({
      template_id: img.id,
      username: import.meta.env.VITE_IMGFLP_USERNAME,
      password: import.meta.env.VITE_IMGFLP_PASSWORD,
      boxes: getBoxes(formData),
    });
  }

  function getBoxes(formData) {
    let boxes = [];
    for (let i = 0; i < img.box_count; i++) {
      let textBox = {
        text: formData.get(`text${i}`),
      };
      boxes.push(textBox);
    }
    return boxes;
  }

  async function sendCreateMemeRequest(params, options) {
    let url = 'https://api.imgflip.com/caption_image?' + params;
    let response = await fetch(url, options);
    if (response.ok) {
      let data = await response.json();
      return data.data;
    } else {
      throw new Error(response.status);
    }
  }
</script>

<h1 id="createMemeHeader">Create a new meme</h1>
<form on:submit|preventDefault={onSubmit}>
  {#if (img === undefined || img === null) && !createdMeme}
    <SelectMeme bind:image={img} />
  {:else if !createdMeme}
    <TextMeme image={img} prevSlide={previousSlide} />
  {:else if createdMeme}
    <SuccessMeme {createdMeme} />
  {/if}
</form>

<style>
  #createMemeHeader {
    text-align: center;
    font-family: 'Indie Flower', cursive;
    margin-bottom: 50px; 
  }

  @media only screen and (min-width: 900px) {
    #createMemeHeader {
      margin-top: 70px;
      margin-bottom: 80px; 
      font-size: 2.6em;
  }
  }
</style>
