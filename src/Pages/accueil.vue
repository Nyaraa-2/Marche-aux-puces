<template>
  <div v-if="loading == false">
    <p class="erreur" v-if="error != ''">{{ error }}</p>
    <actualites :marche="prochainMarche"> </actualites>
    <liste-marches
      titre="Les Marchés à Venir"
      :marches="marcheAVenir"
    ></liste-marches>
    <liste-marches
      titre="Les Anciens Marchés"
      :marches="ancienMarche"
      :ancien="true"
    ></liste-marches>
    <formulaire @post-marche="postMarche"></formulaire>
  </div>
  <div class="else" v-else>
    <img src="../assets/gif.gif" alt="loading" />
    <p>Chargement des données ...</p>
  </div>
</template>

<script>
import actualites from "../components/actualites.vue";
import Formulaire from "../components/formulaire.vue";
import listeMarches from "../components/listemarche.vue";
import _ from "lodash";
export default {
  name: "accueil",
  components: {
    actualites,
    listeMarches,
    Formulaire,
  },
  data: function () {
    return {
      prochainMarche: null,
      loading: true,
      error: "",
      marcheAVenir: [],
      ancienMarche: [],
      filtreMarche: [],
    };
  },
  methods: {
    getMarcheAVenir: async function () {
      try {
        const responseApi = await fetch(
          "http://localhost:8080/marches?marcheAVenir=true"
        );
        this.marcheAVenir = await responseApi.json();
        this.loading = false;
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    getAncienMarche: async function () {
      try {
        const responseApi = await fetch(
          "http://localhost:8080/marches?marcheAncien=true"
        );
        this.ancienMarche = await responseApi.json();
        this.loading = false;
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    filterMarcheByDate: async function () {
      await this.getMarcheAVenir();
      let filter = _.orderBy(this.marcheAVenir, "date", "asc");
      this.filtreMarche = filter;
    },
    getprochainMarche: async function () {
      await this.filterMarcheByDate();
      let prochainMarche = _.head(this.filtreMarche);
      this.prochainMarche = prochainMarche;
    },
    postMarche: async function (nouveauMarche) {
      try {
        await fetch("http://localhost:8080/marches", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: nouveauMarche.nom,
            date: nouveauMarche.date,
            description: nouveauMarche.description,
            url_image: nouveauMarche.image,
          }),
        });
        await this.marcheSauvegarde();
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    marcheSauvegarde: async function () {
      await this.getMarcheAVenir();
      await this.getAncienMarche();
      this.getprochainMarche();
    },
  },
  created: async function () {
    this.getprochainMarche();
    await this.getMarcheAVenir();
    await this.getAncienMarche();
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
}

.erreur {
  font-family: "Yusei Magic", sans-serif;
  font-size: 30px;
  text-align: center;
}

.else {
  text-align: center;
}
.else p {
  font-family: "Yusei Magic", sans-serif;
  font-size: 30px;
}

@media screen and (max-width: 1280px) {
  h1,
  h2 {
    font-size: 60px;
  }
}

@media screen and (max-width: 580px) {
  h1,
  h2 {
    font-size: 40px;
  }
}
</style>