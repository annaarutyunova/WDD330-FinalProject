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
    font-family: 'Indie Flower', cursive;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
  #text-meme-content img {
    max-width: 300px;
    grid-row: 1;
  }
  #text-meme-content #text-area {
    margin: 20px;
    grid-row: 2;
  }
  #control {
    max-width: 750px;
    margin: 0px auto 40px;
    text-align: center;
  }
  button{
    /* margin-top: 20px; */
    font-family: 'Indie Flower', cursive;
    padding: 2px 16px;
    font-size: 1.4em;
    background-color: rgb(111,26,7);
    color: white;
    border: none;
  }
  label{
    font-size: 1.6em;
  }
  input{
    font-size: 1.4em;
    width: 100%;
    height: 35px;
    margin: 0 0 20px;
  }
  @media only screen and (min-width: 700px) {
    #text-meme-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: center;
    }
    #text-meme-content img {
      margin: 0 30px auto auto;
      max-width: 300px;
    }
    #text-meme-content #text-area {
      margin: 20px auto auto 30px;
      grid-row:1;
    }
    #text-meme-content #text-area input {
    }
    #control {
      max-width: 750px;
      margin: 40px auto;
      text-align: center;
    }
    button{
      font-size: 2em;
    }
}
</style>
