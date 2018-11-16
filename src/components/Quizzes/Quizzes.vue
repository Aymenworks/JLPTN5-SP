<template>
  <div>
    <v-toolbar app fixed>
        <v-toolbar-title>Practices</v-toolbar-title>
    </v-toolbar>

    <v-container grid-list-xl>
       <v-layout row wrap>
          <v-flex xs12 v-for="quizz in quizzes" :key="quizz.title">
              <v-card :style="{background: quizz.color}" class="quizzSquare shad" :to="{ name: 'quizzDetail' }">
                <v-card-title>
                  <h1>{{ quizz.title }}</h1>
                  <div>This quizz will have the hardest kanji you have ever seen so far.</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark>Start now</v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout> 
    </v-container>
  </div>
</template>

<script>
  import Quizz from '../../models/Quizz.js'
  
    export default {
        created() {
          console.log('quizzes created');
        },
        data() {
          return {
            quizzes: [
                  new Quizz(1, "Easy", "rgb(235,52,103)"),
                  new Quizz(7, "Play with numbers", "rgb(44,15,81)"),
                  new Quizz(7, "Fill in the blanks", "rgb(54,137,247)"),
                ]
            }
        }
    }
</script>

<style scoped>
.quizzSquare {
  color: white;
}
.quizzSquare h1 {
  color:r red;
}
.shad {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
</style>
