<template>
  <div>
    <section class="titre-accueil">
      <h1>Bienvenue sur le site de la Mairie de GrosVille</h1>
    </section>
    <section class="accueil">
      <div class="img-accueil">
        <img v-bind:src="marche.url_image" alt="fruitsEtLegumes" />
      </div>
      <div class="description-accueil">
        <div>
          <p>
            <span class="name-market-week">{{ marche.nom }}</span>
          </p>
          <p>le : {{ marche.date | date }}</p>
          <hr />
          <p>
            {{ marche.description }}
          </p>
        </div>
        <div>
          <button>
            <router-link :to="`/inscription/${marche.id}`">Inscription</router-link>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "actualites",
  props: {
    marche: null,
  },
  filters : {
    date(valeur) {
      return new Intl.DateTimeFormat("default").format(new Date(valeur));
    }
  }  
};
</script>

<style>
ul a {
  color: black;
  font-family: "Rochester", cursive;
  text-decoration: none;
}

h1,
h2 {
  text-align: center;
  margin-right: 5%;
  font-size: 80px;
  font-weight: 100;
  color: rgb(139, 139, 139);
  margin: 30px;
}

.accueil {
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  margin: auto;
  box-shadow: 25px 25px 19px -21px rgba(0, 0, 0, 1);
}

.accueil .img-accueil {
  width: 50%;
  display: contents;
}

.accueil .img-accueil img {
  max-width: 100%;
  max-height: 500px;
}

.accueil .description-accueil {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
  text-align: justify;
  width: 50%;
  text-align: center;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.589);
  padding: 10px;
  background-color: #eee9e4;
}

.accueil .description-accueil .name-market-week {
  font-weight: bold;
}

a {
  text-decoration: none;
  font-family: "Noto Serif", serif;
  color: white;
}

.accueil button,
.market-past button,
#create-new-market button {
  background-color: #aca98ed8;
  padding: 7px 80px;
  font-size: 25px;
  font-family: "Noto Serif", serif;
  border: solid 1px white;
  transition: all 0.5s;
}

@media screen and (min-width: 1880px) {
  .accueil {
    max-width: 70%;
  }
}

@media screen and (max-width: 1440px) {
  .accueil .description-accueil {
    font-size: 25px;
  }
}
@media screen and (max-width: 1280px) {
  .accueil {
    flex-wrap: wrap;
    height: 90vh;
    margin-bottom: 100px;
    box-shadow: none;
  }
  .accueil .description-accueil {
    min-width: 80%;
    font-size: 25px;
  }
  .accueil .img-accueil {
    min-width: 80%;
  }
  .accueil .img-accueil img {
    border: solid black 3px;
    box-shadow: 25px 25px 19px -21px rgba(0, 0, 0, 1);
  }
  h1,
  h2 {
    font-size: 60px;
  }
}
@media screen and (max-width: 1200px) {
  .accueil {
    box-shadow: none;
  }
}

@media screen and (max-width: 992px) {
  .accueil .description-accueil {
    font-size: 25px !important;
  }
  .accueil {
    box-shadow: none;
  }
}

@media screen and (max-width: 820px) {
  .accueil .img-accueil img {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .accueil {
    height: 50vh;
  }
  .accueil .description-accueil {
    min-height: 400px;
  }
  .accueil .img-accueil img {
    display: none;
  }
}

@media screen and (max-width: 580px) {
  .img-accueil {
    display: none;
  }
  .accueil {
    height: 50vh;
  }
  .accueil .description-accueil {
    font-size: 15px;
    height: 50vh;
  }
  .titre-accueil h1,h2 {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 28px;
  }
}

</style>