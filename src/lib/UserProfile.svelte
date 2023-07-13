<script>
    import { getUserProfile, setUserProfile, getMeme } from "../js/supabaseClient.mjs";
    import { userStore } from "../js/stores.mjs";
    import { onMount } from "svelte";
  
    let loading = false;
    let profile = {};
    let memes = [];
    async function handleSubmit(e) {
      try {
        loading = true;
        const profile = {};
        const formData = new FormData(e.target);
        profile.full_name = formData.get("full_name");
        profile.website = formData.get("website");
        const error = setUserProfile($userStore.user.id, profile);
        if (error) throw error;
      } catch (err) {
        console.log(err);
      } finally {
        loading = false;
      }
    }

    let userProfile = {};
    async function init() {
      userProfile = await getUserProfile($userStore.user.id);
      memes = await getMeme($userStore.user.id);
      console.log(memes[0].url);
      // console.log(getUserProfile($userStore.user.id));
      // console.log(userPprofile.full_name)
    }

  
  
    onMount(init);
  </script>
  <!-- {#if userProfile.full_name != null}
  <h2 id="welcome">Welcome {userProfile.full_name}</h2>
  {:else} -->
  <h2 id="welcome"> Welcome to your Profile</h2>
  <!-- {/if} -->
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="fullName">Full Name</label><br>
      <input
        id="fullName"
        name="full_name"
        class="inputField"
        type="text"
        placeholder="Your full name"
        bind:value={profile.full_name}
      />
    </div>
    <div>
      <button
        type="submit"
        class="button block"
        aria-live="polite"
        disabled={loading}
      >
        <span>{loading ? "Loading" : "Submit"}</span>
      </button>
    </div>
  </form>
  <div id="memes">
    {#each memes as meme}
    <div id="forImg">
      <img src={meme.url} alt="random meme"/>
    </div>
    {/each}
  </div>

<style>
  /* font-family: 'Bagel Fat One', cursive; */
    /* font-family: 'Indie Flower', cursive; */
  #welcome{
    font-family: 'Indie Flower', cursive;
    text-align: center;
    font-size: 2em;
  }
  form{
    font-family: 'Indie Flower', cursive;
    width: 80%;
    margin: 0 auto;
  }
  label{
    font-size: 1.6em;
  }
  input{
    font-family: 'Indie Flower', cursive;
    font-size: 1.4em;
    width: 100%;
    height: 35px;
    margin: 0 0 20px;
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
  #memes{
    margin: 40px 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
  }
  #forImg{
    width: 90%;
    margin: 0 auto;
  }
  img{
    width:100%;
  }
  @media only screen and (min-width: 500px) {
    #welcome{
      font-size: 2.4em;
    }
    form{
      width: 60%;
    }
    #memes{
      width: 90%;
      margin: 40px auto;
      gap: 20px;
      row-gap: 20px;
    }
    #forImg{
      width: 30%;
      margin: 0 auto;
    }
    img{
      display: block;
      margin: auto 0;
      width:100%;
    }
  }
  @media only screen and (min-width: 900px) {
 
  }
</style>

