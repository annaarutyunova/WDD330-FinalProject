import Header from '../lib/Header.svelte';
import UserProfile from '../lib/UserProfile.svelte';
import Footer from '../lib/Footer.svelte';

new Header({
    target: document.getElementById('app'),
  });
  
  new UserProfile({
    target: document.getElementById('app'),
  });
  
  new Footer({
    target: document.getElementById('app'),
  });