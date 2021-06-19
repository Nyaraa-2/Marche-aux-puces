<template>
  <div>
    <h1>Inscription Validée !</h1>
    <div v-if="loading == false">
      <section class="background">
        <div class="recapitulatif">
          <div class="card">
            <div class="paragraphe">
              <p>
                Nom du Marché sélectionné : {{ reservation.marcheDto.nom
                }}<br />
                Date du Marché : {{ reservation.marcheDto.date | date }}<br />
                Nom de l'utilisateur : {{ reservation.utilisateurDto.nom
                }}<br />
                Prénom de l'utilisateur :
                {{ reservation.utilisateurDto.prenom }} <br />
                Adresse de l'utilisateur :
                {{ reservation.utilisateurDto.numero_de_rue }}
                {{ reservation.utilisateurDto.adresse }} <br />
                Numéro de l'emplacement réservé :
                {{ reservation.emplacementDto.numero }}
                <br />
                Numéro de Réservation : {{ reservation.numero }}
              </p>
            </div>
            <ul>
              <li>Réglement de 5€ à réaliser en Mairie</li>
              <li>Justificatif d'identité</li>
              <li>Justificatif de domicile</li>
            </ul>
          </div>
          <div class="submit">
          <div>
            <button @click="home">Revenir à la page d'acceuil</button>
          </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "validation",
  data: function () {
    return {
      loading: true,
      reservation: "",
    };
  },
  methods: {
    getReservation: async function () {
      const responseApi = await fetch(
        `http://localhost:8080/reservations/${this.$route.params.id}`
      );
      this.reservation = await responseApi.json();
      this.loading = false;
    },
    home: function () {
      this.$router.push(`/`);
    }
  },
  filters: {
    date(valeur) {
      return new Intl.DateTimeFormat("default").format(new Date(valeur));
    },
  },
  created : async function(){
    await this.getReservation();
  },
  watch: {
    '$route': function () {
      this.getReservation();
    },
  },
};
</script>

<style>
* {
  margin: 0;
}

body {
  font-family: "Rochester", cursive;
}

a {
  text-decoration: none;
  font-family: "Noto Serif", serif;
  color: white;
}
.background ul {
  list-style: none;
  padding: 10px;
}
.background .recapitulatif {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url(../assets/validation.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 90%;
  width: 80%;
  height: 70vh;
  margin: auto;
  border: none;
  margin-top: 50px;
  box-shadow: 30px 30px 19px -21px rgba(0, 0, 0, 1);
}

.background .recapitulatif .card {
  display: flex;
  flex-direction: column;
  background-color: #eee9e4c4;
  margin: auto;
  width: 70%;
  height: 70%;
  justify-content: space-around;
}
.background .recapitulatif .card .paragraphe {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  font-size: 30px;
  text-align: center;
  line-height: 35px;
}
.background .recapitulatif .card ul {
  text-align: center;
  font-size: 30px;
}
button {
  background-color: #eee9e4;
  padding: 10px 50px;
  font-size: 20px;
  font-family: "Noto Serif", serif;
  border: solid 1px #fda195;
  transition: all 0.5s;
}

button:hover {
  border: solid 1px orange;
  color: white;
  background-color: black;
}
.submit {
  width: 100%;
  height: 30px;
  text-align: center;
  margin: auto;
}
@media screen and (min-width: 1880px) {
  .background .recapitulatif {
    width: 70%;
  }
}
@media screen and (max-width: 1250px) {
  h1,
  h2 {
    font-size: 40px;
  }
  header ul {
    width: 50%;
  }
}

@media screen and (max-width: 992px) {
  nav ul li {
    font-size: 25px;
    word-spacing: 10px;
  }
  h1 {
    margin: 0;
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
  .background .recapitulatif .card .paragraphe {
    font-size: 25px;
  }
  .background .recapitulatif .card ul {
    font-size: 20px;
  }
}

@media screen and (max-width: 660px) {
  header ul {
    margin-top: 10px;
    flex-direction: row;
    width: 90%;
    left: 0;
  }

  nav ul li {
    font-size: 20px;
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