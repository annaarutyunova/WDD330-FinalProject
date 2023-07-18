<script>
  import { onMount } from 'svelte';
  import { userStore } from '../js/stores.mjs';
  import { getSession, logout } from '../js/supabaseClient.mjs';

  // reg expression
  $:active = window.location.pathname.replace(/\//g,"")

  function init() {
    getSession();
  }
  function print(){
    console.log("URL", window.location)
  }
  onMount(init);
</script>

<ul>
  <li class:active={active == ""}><a href="/">HOME</a></li>
  {#if $userStore.isLoggedIn}
    <li class:active={active == "profile"}><a href="/profile/" on:click={print}>PROFILE</a></li>
    <li class:active={active == "create"}><a href="/create/">CREATE</a></li>
    <li><button type="button" on:click={logout}>LOGOUT</button></li>
  {:else}
    <li class:active={active == "login"}><a href="/login/">LOGIN</a></li>
  {/if}
</ul>

<style>
  ul{
    /* background-color: #2b2118; */
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;
    padding: 20px 0;
    font-family: 'Bagel Fat One', cursive;
    font-size: 1.3em;

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
  ul li.active{
    border-bottom: 4px solid white;
  }
  button{
    background-color: transparent;
    border: none;
    font-family: 'Bagel Fat One', cursive;
    font-size: 1em;
    color:white;
    padding:0;

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
