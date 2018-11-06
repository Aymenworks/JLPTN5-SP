<template>
    <div>
      <p class="sectionHeader text-sm-left">{{ configuration.title }}</p>
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

<style scoped>
.sectionHeader {
  color: black;
  font-weight: bold;
  font-size: 28px;
}
</style>

