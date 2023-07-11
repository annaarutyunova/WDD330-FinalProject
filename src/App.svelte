<script>
  import Header from './lib/Header.svelte'
  import Main from './lib/Main.svelte'
  import Footer from './lib/Footer.svelte'
  import Login from "./lib/Login.svelte";
  import { userStore, route } from "./lib/stores.mjs";
  import { getSession, logout, getUserProfile } from "./lib/supabaseClient.mjs";
  import { onMount } from "svelte";
  import NavBar from "./lib/NavBar.svelte";
  import UserProfile from "./lib/UserProfile.svelte";

  let name = "world";
  let posts = [];
  let filteredPosts = [];
  let q = "";
  const url = "https://dummyjson.com/posts/";
  async function getPosts(url) {
    const response = await fetch(url);
    return response.json();
  }
  async function init() {
    const data = await getPosts(url);
    posts = data.posts;
    filteredPosts = posts;
    console.log(data);
    await getSession();
    // await getUserProfile($userStore.user.id);
  }

  function searchHandler(e) {
    const query = e.target.value;
    if (query.length >= 3) {
      filteredPosts = filteredPosts.filter((post) => {
        return (
          post.title.includes(query) ||
          post.body.includes(query) ||
          post.tags.indexOf(query) != -1
        );
      });
    } else {
      filteredPosts = posts;
    }
  }

  window.onpopstate = function (event) {
    if (document.location.hash == "#profile" && !$userStore.isLoggedIn) {
      document.location.hash = "#login";
    } else $route = document.location.hash;
  };

  onMount(init);

</script>
<body>
<Header />
{#if $route === "#profile"}
<UserProfile />
{:else if $route === "#login"}
<Login />
{/if}
<main>
  <Main />

 
</main>
<Main />
<Footer />
</body>

<style>
  body {
    background-color: #1E1E1E;
  }
</style>
