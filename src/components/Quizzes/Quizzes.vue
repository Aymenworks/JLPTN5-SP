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

    export default {
        components: {
            QuizzesList
        },
        data() {
          return {
            firstSection: {
              title: "Aymen test custom",
              quizzes: [
                { title: "Easy", id: "1", color: "red" },
                { title: "Medium", id: "2",  color: "green" },
                { title: "Difficult", id: "3",  color: "blue" },
                { title: "Words", id: "4", image: "home"},
              ]
            },
            secondSection: {
              title: "More variety of quizzes!",
              quizzes: [
                { title: "Fill in the blanks", id: "5", image: "home"},
                { title: "Find the antonyms", id: "6", image: "home"},
                { title: "Play with numbers", id: "7", image: "home"},

              ]
            },
          }
        },
    }
</script>
