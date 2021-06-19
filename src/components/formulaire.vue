<template>
  <section id="create-new-market">
    <div class="creer-marche">
      <h2>Souhaitez-vous ajouter un nouveau marché ?</h2>
      <h2>Cliquez ici</h2>
      <p class="erreur" v-if="error != ''">{{ error }}</p>
      <input type="checkbox" id="form-creation" name="form-hidden" />
      <label for="form-creation">
        <img class="fleche" src="../assets/flechefooter.jpg" alt="flèche" />
      </label>
      <div id="open">
        <div class="img-form">
          <img src="../assets/card-3.jpg" alt="img form" />
        </div>
        <div class="form-market">
          <form @submit.prevent="addMarche">
            <div>
              <label for="name-market">Nom du Marché :</label>
              <input type="text" id="name-market" v-model="nouveauMarche.nom" />
            </div>
            <div>
              <label for="date-market">Date du Marché : </label>
              <input
                type="date"
                id="date-market"
                v-model="nouveauMarche.date"
              />
            </div>
            <div>
              <label for="describe-market">Description : </label>
              <input
                type="text"
                id="describe-market"
                v-model="nouveauMarche.description"
              />
            </div>
            <div>
              <label for="date-end">Image du marché : </label>
              <input
                type="text"
                id="img-Market"
                v-model="nouveauMarche.image"
              />
            </div>
            <div>
              <button type="submit" id="create-market">Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "formulaire",
  data: function () {
    return {
      error: "",
      nouveauMarche: {
        nom: "",
        date: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    addMarche: function () {
      try {
        this.$emit("post-marche", this.nouveauMarche);
        this.clearForm();
      } catch (error) {
        this.error = "Une erreur s'est produite";
      }
    },
    clearForm: function () {
      this.nouveauMarche = {
        nom: "",
        date: "",
        description: "",
        image: "",
      };
    },
  },
  computed: {
    disabled: function () {
      return (
        this.nouveauMarche.nom == "" ||
        this.nouveauMarche.date == "" ||
        this.nouveauMarche.description == "" ||
        this.nouveauMarche.image == ""
      );
    },
  },
};
</script>

<style>
h1,
h2 {
  text-align: center;
  margin-right: 5%;
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

.card button:hover,
#create-market:hover,
.accueil button:hover {
  border: solid 1px orange;
  color: white;
  background-color: black;
}

#create-new-market {
  margin-top: 50px;
}

#create-new-market .creer-marche {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
}

#create-new-market .creer-marche .fleche {
  width: 50px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  animation-duration: 1.5s;
  animation-name: clignoter;
  animation-iteration-count: infinite;
  transition: none;
}

@keyframes clignoter {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#form-creation {
  display: none;
}

#open {
  display: none;
}

#form-creation:checked ~ #open {
  background-color: #eee9e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80% !important;
  height: 600px;
  transition: all 1s;
  box-shadow: 25px 25px 19px -21px rgba(0, 0, 0, 1);
  font-size: 23px;
}

#open .form-market {
  width: 100%;
  height: 500px;
}

#open img {
  height: 600px;
  margin-top: 6px;
}

#open form {
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin: 40px;
  min-height: 450px;
  justify-content: space-between;
  width: 80%;
}

#open form input {
  background-color: #eee9e4;
  border: none;
  border-bottom: solid 1px black;
  width: 50%;
  height: 20px;
  font-size: 30px;
  transition: all 0.2s;
  font-family: "Rochester", cursive !important;
}

#open form input:focus {
  outline: none;
  border-bottom: solid 2px orange;
  font-size: 25px;
}
#open form button {
  display: block;
  margin: auto;
}

.submit {
  width: 20%;
  height: 20px;
  margin: auto;
  margin-top: 20px;
}

@media screen and (min-width: 1880px) {
  #form-creation:checked ~ #open {
    max-width: 60%;
  }
  #footer-container {
    font-size: 18px;
  }
}

@media screen and (max-width: 1280px) {
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
}

@media screen and (max-width: 992px) {
  #footer-container {
    text-align: center;
  }
}

@media screen and (max-width: 580px) {
  h1,
  h2 {
    font-size: 40px;
  }
  #form-creation:checked ~ #open {
    font-size: 20px !important;
    word-spacing: 2px;
  }
}
</style>