<template>
  <v-app id="app">
        <v-content>
          <router-view/>
        </v-content>
        <v-bottom-nav :active.sync="currentNavigation" :value="true" fixed app>
        <v-btn color="teal" flat value="home" :to="{ name: 'home'}">
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="quizzes" :to="{ name: 'quizzes'}">
          <span>Quizzes</span>
          <v-icon>book</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="about" :to="{ name: 'about'}">
          <span>About</span>
          <v-icon>help</v-icon>
        </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      currentNavigation: 'home'
    }
  }
}
</script>

<style>
body, p {
  font-family: 'Roboto';
}

.text-japanese {
    font-family: "Kokoro";
}

</style>