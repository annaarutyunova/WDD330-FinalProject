<script>
  import { userStore, route } from '../js/stores.mjs';
  import { logout } from '../js/supabaseClient.mjs';

  function setRoute(e) {
    // $route = document.location.hash;
    // console.log(document.location.hash);
  }
</script>

<nav>
  <ul>
    {#if $userStore.isLoggedIn}
      <li><a href="#profile" on:click={setRoute}>Profile</a></li>
      <li><a href="#home" on:click={logout}>Logout</a></li>
    {:else}
      <li><a href="#login" on:click={setRoute}>Login</a></li>
    {/if}
  </ul>
</nav>

<style>
  /* ul {
      list-style: none;
      display: flex;
    }
    li {
      padding: 0.5em 1em;
    } */
</style>
