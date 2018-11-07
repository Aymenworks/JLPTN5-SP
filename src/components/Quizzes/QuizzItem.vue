<template>
      <v-btn block left flat large class="text-xs-left">
        <v-icon v-if="quizz.hasImage">{{ quizz.resource }}</v-icon>
        <div v-else :style="{background: quizz.resource}" class="quizzSquare"/>
        {{ quizz.title }}
      </v-btn>
</template>

<script>
  import {Quizz} from './Quizz.js'

    export default {
      props: {
        quizz: {
          type: Quizz,
          required: true,
        },
      },
    }
</script>


<style scoped>
.quizzSquare {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin: 10px;
}
</style>
