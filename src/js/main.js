import Header from '../lib/Header.svelte';
import Main from '../lib/Main.svelte';

new Header({
  target: document.getElementById('app'),
});

new Main({
  target: document.getElementById('app'),
});
