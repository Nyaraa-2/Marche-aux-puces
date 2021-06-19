<template>
  <div>
    <p class="erreur" v-if="error != ''">{{ error }}</p>
    <div v-if="loading == false">
      <h1>Inscription pour :</h1>
      <section>
        <h2>{{ marche.nom }}</h2>
      </section>
      <section>
        <div class="inscription">
          <form @submit.prevent="doReservation">
            <label for="name">Votre Nom : </label
            ><input type="text" v-model="utilisateur.nom" />
            <label for="firstName">Votre Prénom : </label
            ><input type="text" v-model="utilisateur.prenom" />
            <label for="mail">Votre Mail : </label
            ><input type="text" v-model="utilisateur.mail" />
            <label for="telephone">Votre telephone: </label
            ><input
              type="tel"
              size="10"
              placeholder="0123456789"
              v-model="utilisateur.telephone"
            />
            <label for="number">Numéro de voie : </label
            ><input type="number" v-model="utilisateur.numeroDeVoie" />
            <label for="adress">Adresse : </label
            ><input type="text" v-model="utilisateur.adresse" />
            <button type="submit" :disabled="disabled">Valider</button>
          </form>
          <div class="image-inscription">
            <img v-bind:src="marche.url_image" alt="Inscription" />
          </div>
        </div>
      </section>
    </div>
    <div class="else" v-else>
      <img src="../assets/gif.gif" alt="loading" />
      <p>Chargement des données ...</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "inscription",
  data: function () {
    return {
      marche: "",
      loading: true,
      error: "",
      emplacements: [],
      reservations: [],
      utilisateur: {
        nom: "",
        prenom: "",
        mail: "",
        telephone: "",
        numeroDeVoie: "",
        adresse: "",
      },
      nouvelleReservation: {
        utilisateur: "",
        emplacement: "",
        marche: this.$route.params.id,
      },
      reservation: null,
      reservationFind: Boolean,
    };
  },
  methods: {
    getMarche: async function () {
      try {
        const responseApi = await fetch(
          `http://localhost:8080/marches/${this.$route.params.id}`
        );
        this.marche = await responseApi.json();
        this.loading = false;
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    getReservations: async function () {
      try {
        const responseApi = await fetch(
          `http://localhost:8080/reservations?Marche=${this.$route.params.id}`
        );
        this.reservations = await responseApi.json();
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    isReservationExist: async function () {
      await this.getReservations();
      let findReservation = _.find(this.reservations, (reservation) => {
        return reservation.utilisateurDto.nom === this.utilisateur.nom;
      });
      this.reservationFind = findReservation;
    },
    addUser: async function () {
      try {
        const user = await fetch("http://localhost:8080/utilisateur", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nom: this.utilisateur.nom,
            prenom: this.utilisateur.prenom,
            email: this.utilisateur.mail,
            telephone: this.utilisateur.telephone,
            numero_de_rue: this.utilisateur.numeroDeVoie,
            adresse: this.utilisateur.adresse,
          }),
        });
        this.nouvelleReservation.utilisateur = await user.json();
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    getEmplacementsDisponibles: async function () {
      try {
        const responseApi = await fetch(
          `http://localhost:8080/marches/${this.$route.params.id}/emplacements?disponible=true`
        );
        this.emplacements = await responseApi.json();
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    getEmplacementReservation: function () {
      const findEmplacement = _.head(this.emplacements);
      this.nouvelleReservation.emplacement = findEmplacement;
    },
    prepareReservation: async function () {
      try {
        const reserve = await fetch("http://localhost:8080/reservations", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            utilisateurDto: {
              id: this.nouvelleReservation.utilisateur.id,
            },
            emplacementDto: {
              id: this.nouvelleReservation.emplacement.id,
            },
            marcheDto: {
              id: parseInt(this.$route.params.id),
            },
          }),
        });
        this.reservation = await reserve.json(); //recuperer id pour router
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    doReservation: async function () {
      try {
        await this.isReservationExist();
        if (this.reservationFind) {
          this.$router.push(`/erreur/userExist`);
          return; //permet de sortir de la methode
        }
        await this.getEmplacementsDisponibles();
        if (this.emplacements.length === 0) {
          this.$router.push(`/erreur/emplacements`);
          return;
        }
        await this.addUser();
        this.getEmplacementReservation();
        await this.prepareReservation();
        this.$router.push(`/validation/${this.reservation.id}`);
        this.clearForm();
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },

    clearForm: function () {
      (this.utilisateur = {
        nom: "",
        prenom: "",
        mail: "",
        telephone: "",
        numeroDeVoie: "",
        adresse: "",
      }),
        (this.nouvelleReservation = {
          utilisateur: "",
          emplacement: "",
          marche: "",
        }),
        (this.reservation = null);
    },
  },
  created: async function () {
    await this.getMarche();
  },
  watch: {
    '$route': function () {
      this.getMarche();
    },
  },
  computed: {
    disabled: function () {
      return (
        this.utilisateur.nom == "" ||
        this.utilisateur.prenom == "" ||
        this.utilisateur.email == "" ||
        this.utilisateur.telephone.substr(0, 1) !== "0" ||
        this.utilisateur.telephone.length < 10 ||
        this.utilisateur.numero_de_rue == "" ||
        this.utilisateur.adresse == ""
      );
    },
  },
};
</script>

<style>
.erreur {
  font-family: "Yusei Magic", sans-serif;
  font-size: 30px;
  text-align: center;
}
.inscription {
  background-color: #eee9e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  height: 70vh;
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
  box-shadow: 25px 25px 19px -21px rgba(0, 0, 0, 1);
}

.image-inscription,
.image-inscription img {
  height: 70vh;
}

.inscription form {
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-around;
  margin-bottom: 100px;
  line-height: 60px;
  text-align: justify;
}

.inscription form input {
  background-color: #eee9e4;
  font-family: "Rochester", cursive;
  border: none;
  border-bottom: solid 1px black;
  color: #4e4e4e;
  width: 500px;
  height: 20px;
  font-size: 25px;
  transition: all 0.2s;
}

.inscription form input:focus {
  outline: none;
  border-bottom: solid 2px orange;
  font-size: 25px;
  font-family: "Rochester", cursive;
  color: #4e4e4e;
}

button {
  background-color: #aca98e;
  padding: 7px;
  font-size: 25px;
  font-family: "Noto Serif", serif;
  border: solid 1px white;
  transition: all 0.5s;
  margin-top: 50px;
}

button a {
  color: white;
}
@media screen and (min-width: 1880px) {
  .inscription {
    width: 70%;
    font-size: 30px;
  }
}
@media screen and (max-width: 1280px) {
  h1,
  h2 {
    font-size: 40px;
  }
  header ul {
    width: 50%;
  }
  .inscription form input {
    width: 300px;
  }
}
@media screen and (max-width: 1200px) {
  .inscription form {
    font-size: 20px;
  }
  .inscription form input {
    width: 300px;
  }
}

@media screen and (max-width: 992px) {
  .inscription {
    font-size: 25px !important;
  }
  ul li {
    font-size: 25px;
    word-spacing: 10px;
  }
  .inscription .image-inscription {
    display: none;
  }
  #footer-container {
    text-align: center;
  }
}
@media screen and (max-width: 820px) {
  header ul {
    flex-direction: column;
    text-align: center;
    line-height: 40px;
  }
}
@media screen and (max-width: 660px) {
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
  h1,
  h2 {
    font-size: 40px;
  }
  .logo {
    display: none;
  }
}
</style>