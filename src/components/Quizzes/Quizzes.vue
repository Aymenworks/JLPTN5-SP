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
                { title: "Aymen test custom 1", id: "1" },
                { title: "Aymen test custom 2", id: "2" },
                { title: "Aymen test custom 3", id: "3" },
                { title: "Aymen test custom 4", id: "4" },
                { title: "Aymen test custom 5", id: "5" },
              ]
            },
            secondSection: {
              title: "More variety of quizzes!",
              quizzes: [
                { title: "Aymen test custom 6", id: "6" },
              ]
            },
          }
        },
    }
</script>
