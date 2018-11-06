<template>
  <div id="app">
    <v-card height="200px" flat>
      
      <router-view/>

      <v-bottom-nav>

        <v-btn color="teal" flat to="/">
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" flat to="/quizzes">
          <span>Quizzes</span>
          <v-icon>book</v-icon>
        </v-btn>

        <v-btn color="teal" flat to="/about">
          <span>About</span>
          <v-icon>help</v-icon>
        </v-btn>
      </v-bottom-nav>
  </v-card>
  </div>
</template>
