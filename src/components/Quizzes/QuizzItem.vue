<template>
      <v-btn block left flat large class="text-xs-left">
        <div v-if="quizz.color" :style="{background: quizz.color}" class="quizzSquare"/>
        <v-icon v-else-if="quizz.image">{{ quizz.image }}</v-icon>
        <div v-else style="background: black" class="quizzSquare"/>
        {{ quizz.title }}
      </v-btn>
</template>

<script>
    export default {
      props: {
        quizz: {
          type: Object,
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
