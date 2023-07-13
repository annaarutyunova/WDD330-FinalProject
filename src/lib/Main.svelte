<script>
  let memes = [
    'https://media.tenor.com/joFBhkvly8sAAAAd/dog-waiting-for-you.gif',
    'https://media.tenor.com/d4sPgSJml54AAAAC/opihomm-funny.gif',
    'https://media.tenor.com/VLHYNUC7h30AAAAM/doruk-hava.gif',
    'https://media.tenor.com/sQXkvagqfWYAAAAM/lol-funny-memes.gif',
    'https://media.tenor.com/Sk9gjGqIVEkAAAAM/good-morning.gif',
    'https://media.tenor.com/TKSEpuhns1oAAAAM/haha-baby.gif',
    'https://media.tenor.com/Np4fGlwk-r0AAAAM/best-friend---penguins-penguins.gif',
    'https://media.tenor.com/CD_V3r64nFoAAAAM/children-funny.gif',
    'https://media.tenor.com/c_7ylv42vckAAAAM/funny-animals.gif',
    'https://media.tenor.com/oQmmTl1bhVcAAAAM/halloween-funny.gif',
    'https://media.tenor.com/RZtNRRqnSNoAAAAM/very-funny-haha.gif',
  ];

  let meme;
  let meme2;
  function getMemes() {
    meme = memes[Math.floor(Math.random() * memes.length)];
    meme2 = memes[Math.floor(Math.random() * memes.length)];

    while (meme2 == meme) {
      meme2 = memes[Math.floor(Math.random() * memes.length)];
    }
  }
  getMemes();
</script>

<!-- <h1 id="welcome">Welcome to the jungle of meme</h1>        -->
<div id="welcomeMemes">
  <h1 id="welcome">Welcome to the jungle of meme</h1>
  <img id="welcomeMeme1" src={meme} alt="random meme" />
  <img id="welcomeMeme2" src={meme2} alt="random meme" />
  <a id="signinButton" href="/login/"><p>Sign In</p></a>
</div>

<style>
  #welcomeMemes {
    background-color: #2b2118;
  }
  #welcome {
    display: block;
    max-width: 80%;
    text-align: center;
    margin: 20px auto;
  }
  #welcomeMeme1 {
    display: block;
    width: 250px;
    height: auto;
    margin: 20px auto 0;
  }
  #welcomeMeme2 {
    display: none;
  }
  #signinButton {
    text-decoration: none;
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
  #signinButton p {
    text-align: center;
    padding: 10px 20px;
    border: 1px solid #2b2118;
    color: black;
    font-size: 1.6em;
  }
  @media only screen and (min-width: 500px) {
    #welcomeMemes {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      place-items: center;
    }
    #welcome {
      grid-column: 1/4;
      margin: auto;
      font-size: 3em;
    }
    #welcomeMeme2 {
      display: block;
      width: 180px;
      height: 180px;
      grid-column: 1;
      grid-row: 2;
      padding-top: 50px;
    }
    #welcomeMeme1 {
      width: 180px;
      height: 180px;
      grid-column: 3;
      grid-row: 2;
      margin-top: 0;
      padding-top: 50px;
    }
    #signinButton p {
      text-align: center;
      padding: 10px 20px;
      border: 1px solid white;
      color: white;
      font-size: 1.6em;
    }
  }
  @media only screen and (min-width: 900px) {
    #welcomeMemes {
      margin-top: 50px;
    }
    #welcomeMeme1, #welcomeMeme2 {
      display: block;
      width: 250px;
      height: 250px;
      margin: 20px auto 0;
      margin: 0;
      padding: 0;
    }
    #welcome {
      grid-column: 2;
      margin: auto;
      font-size: 3em;
    }

    #signinButton {
    text-decoration: none;
    display: block;
    width: fit-content;
    margin: 0 auto;
    grid-column:2;
    grid-row:2;
  }
  }
</style>
