import Header from '../lib/Header.svelte';
import CreateForm from '../lib/CreateForm.svelte';
import Footer from '../lib/Footer.svelte'
new CreateForm({
  target: document.getElementById('form'),
});

new Header({
  target: document.getElementById('app'),
});

new Footer({
  target:document.getElementById('footer')
})