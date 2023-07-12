<script>
  export let image;
  export let prevSlide;
</script>

<div id="text-meme-content">
  <img src={image.url} alt={image.name} />
  <div id="text-area">
    {#each Array(image.box_count) as _, index (index)}
      <label for="text{index}">Caption {index + 1}</label><br />
      <input
        type="text"
        name="text{index}"
        id="text{index}"
        required
        maxlength="40"
      />
      <br />
    {/each}
  </div>
</div>
<div id="control">
  <button type="button" on:click|preventDefault={prevSlide}>Back</button>
  <button type="submit">Submit</button>
</div>

<style>
  #text-meme-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
  #text-meme-content img {
    grid-column: 2/4;
    max-width: 300px;
  }
  #text-meme-content #text-area {
    grid-column: 4/6;
  }
  #text-meme-content #text-area input {
    width: 200px;
    height: 25px;
  }
  #control {
    max-width: 750px;
    margin: 0 auto;
    text-align: center;
  }
</style>
