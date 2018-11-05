<template>
  <div>
      <v-container grid-list-sm>
        <v-layout align-space-between justify-start column>
          <QuizzesList title="Custom title"/>
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
            quizzTitle: "Aymen title",
          }
        },
    }
</script>
