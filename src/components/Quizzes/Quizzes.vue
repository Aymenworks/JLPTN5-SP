<template>
  <div>
    <v-toolbar app fixed>
        <v-toolbar-title>Practices</v-toolbar-title>
    </v-toolbar>

    <v-container grid-list-xl>
       <v-layout row wrap>
          <v-flex xs12 v-for="quizz in quizzes" :key="quizz.id">
              <v-card :style="{background: quizz.color}" class="quizzSquare shad">
                <v-card-title>
                  <h1>{{ quizz.title }}</h1>
                  <div>This quizz will have the hardest kanji you have ever seen so far.</div>
                </v-card-title>
                <v-divider dark></v-divider>
                <v-card-actions>
                  <v-btn flat dark :to="{ name: 'quizzDetail', params: { quizz: quizz } }">Start now</v-btn>
                </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout> 
    </v-container>
  </div>
</template>

<script>
  import {QuizzLevel, Quizz, QuizzType} from '../../models/Quizz.js'
  
    export default {
        created() {
          console.log('quizzes created');
        },
        data() {
          return {
            quizzes: [
                  // new Quizz(1, "Enjoy all the kanji", "rgb(235,52,103)"),
                new Quizz(0, "Easy", "rgb(133,135,155)", QuizzType.ALLKANJI, QuizzLevel.EASY),
                new Quizz(1, "Medium", "rgb(0,125,255)", QuizzType.ALLKANJI, QuizzLevel.MEDIUM),
                new Quizz(2, "Difficult", "rgb(235,52,103)", QuizzType.ALLKANJI, QuizzLevel.HARD),
                new Quizz(3, "Play with numbers", "rgb(44,15,81)", QuizzType.NUMBER, QuizzLevel.HARD),
                ]
            }
        }
    }
</script>

<style scoped>
.quizzSquare {
  color: white;
}
.shad {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
</style>
