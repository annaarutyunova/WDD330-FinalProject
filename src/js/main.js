import Header from '../lib/Header.svelte';
import Main from '../lib/Main.svelte';
import Footer from '../lib/Footer.svelte';

new Header({
  target: document.getElementById('app'),
});

new Main({
  target: document.getElementById('app'),
});

new Footer({
  target: document.getElementById('app'),
});
