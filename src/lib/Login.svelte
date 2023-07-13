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
  /* font-family: 'Bagel Fat One', cursive; */
  /* font-family: 'Indie Flower', cursive; */
  .description{
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
    margin-bottom: 50px;
  }
  
  @media only screen and (min-width: 500px) {
    .description{
      font-size: 2.4em;
    }
    form{
      width: 60%;
    }
    
    button{
      margin-bottom: 100px;
    }
 
  }
  @media only screen and (min-width: 900px) {
    form{
      width: 40%;
    }
  }
  
</style>
