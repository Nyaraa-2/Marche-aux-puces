<template>
  <section id="markets">
    <h2 id="market-list">{{ titre }}</h2>
    <div :class="{ 'market-coming': !ancien, 'market-past': ancien }">
      <div v-for="marche in marches" :key="marche.id" class="card">
        <img v-bind:src="marche.url_image" alt="img-card" />
        <div class="card-description">
          <p :class="{'name-market-coming': !ancien, 'name-market-past': ancien}">{{ marche.nom }}</p>
          <p :class="{'date-market-coming': !ancien,'date-market-past': ancien}">{{ marche.date | date }}</p>
          <button>
            <router-link v-if="!ancien" :to="`/inscription/${marche.id}`">Inscription</router-link>
            <router-link v-else :to="`/photos/${marche.id}`">Voir photos</router-link>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "liste-marche",
  props: {
    titre: String,
    marches: Array,
    ancien: Boolean,
  },
  filters: {
    date(valeur) {
      return new Intl.DateTimeFormat("default").format(new Date(valeur));
    },
  },
};
</script>

<style>
h1,
h2 {
  text-align: center;
  font-size: 80px;
  font-weight: 100;
  color: rgb(139, 139, 139);
  margin: 30px;
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

.market-coming,
.market-past {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  min-height: 400px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
}

.market-coming .card,
.market-past .card {
  display: flex;
  align-items: center;
  font-size: 25px;
  text-align: center;
  justify-content: space-between;
  background-color: #f8f0da70;
  margin: 20px;
  height: 300px;
  min-height: 300px;
  box-shadow: 25px 25px 19px -21px rgba(0, 0, 0, 1);
}

.market-coming img,
.market-past img {
  width: 224px;
  height: 300px;
  transition: all 0.5s;
}

.market-past img {
  filter: grayscale(50%);
  filter: blur(2px);
  transition: 0.5s ease-in-out;
}

.market-coming .card img:hover,
.market-past .card img:hover {
  filter: brightness(120%);
  filter: blur(0);
}

.market-coming .card .card-description,
.market-past .card .card-description {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 250px;
  width: 60%;
  padding: 10px;
}

.market-coming .card button,
.market-past .card button {
  background-color: #aca98ed8;
  padding: 6px 50px;
  font-size: 25px;
  font-family: "Noto Serif", serif;
  border: solid 1px white;
  transition: all 0.5s;
}

.card button:hover,
#create-market:hover,
.accueil button:hover {
  border: solid 1px orange;
  color: white;
  background-color: black;
}
@media screen and (min-width: 1880px) {
  .accueil {
    max-width: 70%;
  }
}

@media screen and (max-width: 1440px) {
  /*écran macbook 13" */
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
  header ul {
    width: 50%;
  }
}
@media screen and (max-width: 1200px) {
  #open img {
    display: none;
  }
  .submit {
    align-self: center;
  }
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
  ul li {
    font-size: 25px;
    word-spacing: 10px;
  }
}

@media screen and (max-width: 820px) {
  header ul {
    flex-direction: column;
    text-align: center;
    line-height: 40px;
  }
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
  header ul {
    margin-top: 10px;
    flex-direction: row;
    width: 90%;
    left: 0;
  }

  ul li {
    font-size: 22px;
  }
  #fleche {
    width: 4px;
    height: 4px;
    margin-top: 10px;
  }
  .logo,
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
  h1,
  h2 {
    font-size: 40px;
  }
  .market-coming .card button,
  .market-past .card button {
    font-size: 15px !important;
    padding: 6px 0px;
  }

  .market-coming .card,
  .market-past .card {
    font-size: 20px;
  }
}

</style>