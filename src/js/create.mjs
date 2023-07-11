import Header from '../lib/Header.svelte';
import CreateForm from '../lib/CreateForm.svelte';

new CreateForm({
  target: document.getElementById('form'),
});

new Header({
  target: document.getElementById('app'),
});
