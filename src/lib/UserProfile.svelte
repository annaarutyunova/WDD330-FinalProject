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
      console.log(getUserProfile($userStore.user.id));
      // console.log(userPprofile.full_name)
    }

  
  
    onMount(init);
  </script>
  {#if userProfile.full_name != null}
  <h2>Welcome {userProfile.full_name}</h2>
  {:else if userProfile.username != null}
  <h2> Welcome {userProfile.username}</h2>
  {:else}
  <h2> Welcome to your Profile</h2>
  {/if}
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="website">Website</label>
      <input
        id="website"
        name="website"
        class="inputField"
        type="text"
        placeholder="Your website"
        bind:value={profile.website}
      />
    </div>
    <div>
      <label for="fullName">Full Name</label>
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
    <img src={meme.url} alt="random meme"/>
    {/each}
  </div>

