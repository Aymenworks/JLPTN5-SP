<template>
  <div>
      <v-container grid-list-sm>
        <v-layout align-space-between justify-start column>
          <QuizzesList :configuration="firstSection" />
          <QuizzesList :configuration="secondSection" />
        </v-layout>
      </v-container>
  </div>
</template>

<script>
  import QuizzesList from '@/components/Quizzes/QuizzesList'
  import {Quizz} from './Quizz.js'
  
    export default {
        components: {
            QuizzesList
        },
          created() {
            console.log('quizzes created');
        },
        data() {
          return {
            firstSection: {
              title: "Aymen test custom",
              quizzes: [
                new Quizz(1, "Easy", "red", false),
                new Quizz(2, "Medium", "red", false),
                new Quizz(3, "Difficult", "red", false),
                new Quizz(4, "Words", "home"),
              ]
            },
            secondSection: {
              title: "More variety of quizzes!",
              quizzes: [
                new Quizz(5, "Fill in the blanks", "home"),
                new Quizz(6, "Find the antonyms", "home"),
                new Quizz(7, "Play with numbers", "home"),
              ]
            },
          }
        },
    }
</script>
