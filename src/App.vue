<template>
  <v-app id="app">
        <v-content>
          <router-view/>
        </v-content>

        <v-bottom-nav>
          <v-btn color="teal" flat :to="{ name: 'home'}">
            <span>Home</span>
            <v-icon>home</v-icon>
          </v-btn>

          <v-btn color="teal" flat :to="{ name: 'quizzes'}">
            <span>Quizzes</span>
            <v-icon>book</v-icon>
          </v-btn>

          <v-btn color="teal" flat :to="{ name: 'about'}">
            <span>About</span>
            <v-icon>help</v-icon>
          </v-btn>
        </v-bottom-nav>
  </v-app>
</template>

<style>

body, p {
  font-family: 'Roboto';
}

.text-japanese {
    font-family: "Kokoro";
}

</style>