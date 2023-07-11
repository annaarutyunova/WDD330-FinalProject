<script>
    import Nav from './Nav.svelte'
  import NavBar from './NavBar.svelte';
</script>

<div id="header">
        <p id="logo"><a href="#">Memer</a></p>
        <NavBar />
</div>
<Nav />

<style>
    #header{
    background-color: #6F1A07;
    color: white;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    font-family: 'Indie Flower', cursive;
}
    #logo a{
        /* font-family: 'Indie Flower', cursive; */
        text-decoration: none;
        font-size: 1.4em;
        color:white;
    }

    #signin a{
            text-decoration: none;
            font-size: 1.4em;
            color:white;
        }
    @media only screen and (min-width: 500px){
        #header{
            padding: 0 20px;
        }
        #logo a{
            font-size: 2em;
        }
        #signin a{
            font-size: 1.6em;
        }
    }
</style>


