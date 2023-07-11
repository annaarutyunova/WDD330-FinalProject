import Header from '../lib/Header.svelte';
import Login from '../lib/Login.svelte';
import Footer from '../lib/Footer.svelte';

new Header({
    target: document.getElementById('app'),
  });
  
  new Login({
    target: document.getElementById('app'),
  });
  
  new Footer({
    target: document.getElementById('app'),
  });