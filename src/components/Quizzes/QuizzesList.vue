<template>
    <div>
      <v-card-text class="kanjiText">Practice {{ configuration.title }}</v-card-text>
      <v-flex xs12 v-for="quizz in configuration.quizzes" :key="quizz.id">
        <QuizzItem :quizz="quizz"/>
        <v-divider light/>
      </v-flex>
    </div>
</template>

<script>
  import QuizzItem from './QuizzItem'

    export default {
      components: {
          QuizzItem
      },
      props: {
        configuration: {
          type: Object,
          required: true,
        },
      },
    }
</script>
