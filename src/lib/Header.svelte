<script>
  import Nav from './Nav.svelte';
</script>

<div id="header">
  <p id="logo"><a href="/">Memer</a></p>
</div>
<Nav />

<style>
  #header {
    background-color: #6f1a07;
    color: white;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    font-family: 'Indie Flower', cursive;
  }
  #logo {
    /* font-family: 'Indie Flower', cursive; */
    font-size: 1.6em;
    margin: 5px;
  }
  @media only screen and (min-width: 500px) {
    #logo {
      font-size: 1.5em;
    }
    #signin a {
      text-decoration: none;
      font-size: 1.4em;
      color: white;
    }
    @media only screen and (min-width: 500px) {
      #header {
        padding: 0 20px;
      }
      #logo a {
        font-size: 2em;
      }
      #signin a {
        font-size: 1.6em;
      }
    }
  }
</style>
