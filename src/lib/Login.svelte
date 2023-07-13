<script>
  import { route } from '../js/stores.mjs';
  import { supabase, login, signUp } from '../js/supabaseClient.mjs';

  let loading = false;
  let email = '';
  let password = '';

  const handleLogin = async () => {
    try {
      loading = true;
      const { data, error, redirect } = await login({ email, password });
      if (error) throw error;
      // alert('Check your email for login link!')
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
  const handleSignup = async () => {
    try {
      loading = true;
      const { data, error } = await signUp({ email, password });
      if (error) throw error;
      // alert('Check your email for login link!')
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  };
</script>

<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <p class="description">Sign in below</p>
    <form class="form-widget" on:submit|preventDefault={handleLogin}>
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          class="inputField"
          type="email"
          placeholder="Your email"
          bind:value={email}
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          class="inputField"
          type="password"
          placeholder="Password"
          bind:value={password}
        />
      </div>
      <div>
        <button
          type="submit"
          class="button primary"
          aria-live="polite"
          disabled={loading}
        >
          <span>{loading ? 'Loading' : 'Login'}</span>
        </button>
        <button
          on:click={handleSignup}
          type="button"
          class="button block"
          aria-live="polite"
          disabled={loading}
        >
          <span>{'Signup'}</span>
        </button>
      </div>
    </form>
  </div>
</div>

<style>
  
</style>
