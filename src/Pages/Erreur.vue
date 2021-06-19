<template>
  <div class="empty">
    <div v-if="$route.params.origin === 'emplacements'">
      <p>Le marché ne possède plus d'emplacements disponibles</p>
    </div>
    <div v-if="$route.params.origin === 'userExist'">
      <p>Vous possédez déjà une réservation</p>
    </div> 
    <div>
      <button @click="home">Revenir à la page d'acceuil</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "erreur",
  methods: {
    home: function () {
      this.$router.push(`/`);
    },
  },
};
</script>

<style>
.empty {
  display: flex;
  flex-direction: column;
  margin-bottom: 380px;
  text-align: center;
  font-size: 40px;
  align-items: center;
}
</style>