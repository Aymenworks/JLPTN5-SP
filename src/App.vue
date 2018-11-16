<template>
  <v-app id="app">
        <v-content>
          <router-view/>
        </v-content>

        <v-footer app fixed height="auto">
          <v-layout justify-center row wrap>
            <v-btn large icon flat :to="{ name: 'home'}">
              <v-icon>home</v-icon>
            </v-btn>

            <v-btn large icon flat :to="{ name: 'quizzes'}">
              <v-icon>book</v-icon>
            </v-btn>

            <v-btn large icon flat :to="{ name: 'about'}">
              <v-icon>help</v-icon>
            </v-btn>
          </v-layout>
        </v-footer>
  </v-app>
</template>

<style>

body, p {
  font-family: 'Roboto';
}

.text-japanese {
    font-family: "Kokoro";
}

.scaleOnHover {
  transition-duration: 0.3s;
}

.scaleOnHover:hover {
  transform: scale(1.1,1.1);
}
</style>