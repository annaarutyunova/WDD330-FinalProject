<script>
</script>

<!-- <h1 id="welcome">Welcome to the jungle of meme</h1>        -->
<div id="welcomeMemes">
    <h1 id="welcome">Welcome to the jungle of meme</h1>   
    <img id="welcomeMeme1" src="https://media.tenor.com/OeswMjtpFdQAAAAM/cat.gif" alt="cat smilling" />
    <img id=welcomeMeme2 src="https://media.tenor.com/fREyFxrehi0AAAAd/cat-lick-cat.gif" alt="cat lick" />
    <a id="logoPhone" href="#login"><p>Sign In</p></a>
</div>


<style>
    #welcome{
        display:block;
        max-width: 80%;
        text-align: center;
        margin: 20px auto;
    }
    #welcomeMeme1{
        display: block;
        width: 250px;
        height:auto;
        margin: 20px auto 0;
    }
    #welcomeMeme2{
        display:none;
    }
    #logoPhone{
        text-decoration: none;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
    #logoPhone p{
        text-align:center;
        padding: 10px 20px;
        border: 1px solid #2b2118;
        color: black;
        font-size: 1.6em;
    }
    @media only screen and (min-width: 500px){
        #welcomeMemes{
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
            place-items: center;
        }
        #welcome{
            grid-column: 1/4;
            margin: auto;
            font-size: 3em;
        }
        #welcomeMeme2{
            display: block;
            width: 180px;
            height:180px;
            grid-column: 1;
            grid-row: 2;
            padding-top: 50px;
        }
        #welcomeMeme1{
            width: 180px;
            height:180px;
            grid-column: 3;
            grid-row: 2;
            margin-top: 0;
            padding-top: 50px;
        }
        #logoPhone{
            grid-column: 2;
        }
    }
    @media only screen and (min-width: 900px){
        #welcomeMemes{
            margin-top: 50px;
        }
        #welcomeMeme1, #welcomeMeme2{
            display: block;
            width: 250px;
            height:250px;
            margin: 20px auto 0;;
            margin: 0;
            padding: 0;
        }
        #welcome{
            grid-column: 2;
            margin: auto;
            font-size: 3em;
        }

    }
</style>