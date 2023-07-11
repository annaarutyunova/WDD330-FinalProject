<script>
    import { getUserProfile, setUserProfile } from "./supabaseClient.mjs";
    import { userStore } from "./stores.mjs";
    import { onMount } from "svelte";
  
    let loading = false;
    let profile = {};
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
  
    async function init() {
      profile = await getUserProfile($userStore.user.id);
    }
  
    onMount(init);
  </script>
  
  <h2>User Profile</h2>
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