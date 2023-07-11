<script>
  import SelectMeme from './SelectMeme.svelte';

  let imgUrl = '';
  let data = {};
</script>

<form on:submit|preventDefault={() => console.log('submitted')}>
  <SelectMeme />
</form>
