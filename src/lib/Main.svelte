<script>
</script>

<h1 id="welcome">Welcome to the jungle of meme</h1>       
<div id="welcomeMemes">
    <img id="welcomeMeme1" src="https://media.tenor.com/OeswMjtpFdQAAAAM/cat.gif" alt="cat smilling"/>
    <img id=welcomeMeme2 src="https://media.tenor.com/fREyFxrehi0AAAAd/cat-lick-cat.gif" alt="cat lick">
    <a id="logoPhone" href="#" ><p>Sign In</p></a>
</div>

<style>
    #welcome{
    width: fit-content;
    text-align: center;
    margin: 20px 30px;
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
    @media only screen and (min-width: 500){
        #welcomeMemes{
            display:flex;
            justify-content: space-around;
        }
        #welcomeMeme1, #welcomeMeme2{
            display: line;
            width: 250px;
            height:250px;
            margin: 20px auto 0;;
            margin: 0;
            padding: 0;
        }
    }
    @media only screen and (min-width: 900){

    }
</style>