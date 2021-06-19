<template>
  <nav>
    <img src="../assets/logo.png" alt="logo" class="logo" />
    <img @click="hide" id="fleche" src="../assets/menu.png" alt="fleche" />
    <ul :class="{ 'open-menu': visible == true }">
      <li><router-link :to="'/'">Accueil</router-link></li>
      <li><router-link :to="'/inscription'">Inscription</router-link></li>
      <li>
        <a href="#market-list">Liste des marchés</a> 
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data: function () {
    return {
      visible: false,
    };
  },
  methods: {
    hide: function () {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
nav {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  margin: auto;
}

nav #fleche {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

nav ul {
  width: 35%;
  justify-content: space-around;
  display: flex;
  list-style: none;
  left: 150px;
  position: fixed;
  filter: opacity(0%);
  transition: all 1s;
  padding: 0;
}

.open-menu {
  position: absolute;
  filter: opacity(100%);
  transition: all 1s;
}

ul li {
  font-size: 30px;
}

ul li:hover,
ul a:hover {
  text-decoration: underline orange;
}

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


@media screen and (max-width: 1280px) {
  nav ul {
    width: 50%;
  }
}

@media screen and (max-width: 992px) {
  nav ul li {
    font-size: 25px;
    word-spacing: 10px;
}

@media screen and (max-width: 820px) {
  nav ul {
    flex-direction: column;
    text-align: center;
    line-height: 40px;
    margin : 20px ;
  }
}

@media screen and (max-width: 580px) {
  nav ul {
    margin-top: 10px;
    margin: auto;
    flex-direction: row;
    width: 90%;
    left : 0;
  }
  .open-menu {
  margin: auto;
}

  nav ul li {
    font-size: 22px;
  }
  .fleche {
    width: 4px;
    height: 4px;
    margin-top: 10px;
  }
  .logo{
    display: none;
  }
 }
}
</style>