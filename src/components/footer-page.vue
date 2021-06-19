<template>
  <footer>
    <div id="footer-container">
      <div class="element first">
        <h4>Coordonnées</h4>
        <br />
        <p>Hôtel de ville 17 rue Arthur Rimbaud 99999 GrosVille</p>
        <p>Tél: <a href="tel:+0990999999">09 90 99 99 99</a></p>
        <p>
          Mail:
          <a href="mailto:service.courrier@ville-grosville.fr"
            >service.courrier@ville-grosville.fr</a
          >
        </p>
        <p>© 2020 GrosVille.fr / Marina Vandenbosch - Tous droits réservés</p>
      </div>
      <div class="element second">
        <h4>Horaires d'ouvertures</h4>
        <br />
        <h5>Accueil</h5>
        <br />
        <p>Du lundi au vendredi 8h30-12h et 13h30-17h30</p>
        <p>Samedi 9h-12h</p>
        <br />
        <h5>État civil</h5>
        <br />
        <p>Lundi 13h30-17h30</p>
        <p>Du mardi au vendredi 8h30-12h et 13h30-17h30 (sur RDV)</p>
      </div>
      <div class="element third">
        <h4>Signaler une anomalie sur l'espace public</h4>
        <br />
        <p>Voirie, espaces verts, propreté, éclairage public</p>
        <p>Tel : <a href="tel:+0800999999">0 800 99 99 99</a></p>
        <p>
          Mail:
          <a href="mailto:service.espace@ville-grosville.fr"
            >service.espace@ville-grosville.fr</a
          >
        </p>
        <br />
        <h4>Suivez-nous !</h4>
        <br />
        <img src="../assets/facebook.png" alt="facebook" />
        <img src="../assets/twitter.png" alt="twitter" />
        <img src="../assets/instagram.png" alt="instagram" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-page",
};
</script>

<style>
footer {
  margin-top: 100px;
  background-color: #eee9e4;
  border-top: rgb(206, 206, 206) solid 1px;
}
#footer-container {
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  font-size: 13px;
}

#footer-container .element {
  padding: 15px;
}

#footer-container a {
  text-decoration: underline;
  color: black;
}

#footer-container a:hover {
  color: orange;
  text-decoration: underline black;
}
</style>