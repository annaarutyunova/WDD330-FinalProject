<script>
  import SelectMeme from './SelectMeme.svelte';

  let imgUrl = '';
  let data = {};
</script>
<h1 id="createMemeHeader">Create a new meme</h1>
<form on:submit|preventDefault={() => console.log('submitted')}>
  <SelectMeme />
</form>

<style>
  #createMemeHeader{
    text-align:center;
  }
</style>
