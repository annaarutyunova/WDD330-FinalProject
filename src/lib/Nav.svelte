<script>
  import {userStore} from "../js/stores.mjs"
</script>

<ul>
  <li><a href="/">HOME</a></li>
  {#if userStore.isLoggedIn} 
  <li><a href="/create/">CREATE</a></li>
  <li><a href="/profile/">PROFILE</a></li>
  {/if}

</ul>

<style>
  ul {
    background-color: #2b2118;
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;
    padding: 20px 0;
  }
  ul li {
    display: inline-block;
    position: relative;
    list-style-type: none;
  }
  ul li::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  ul li:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media only screen and (min-width: 500px) {
    ul {
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 900px) {
  }
</style>
