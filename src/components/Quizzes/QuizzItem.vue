<template>
    <div>
      <v-btn block flat large class="text-xs-left">
        <div color="red" class="quizzSquare"/>
        {{ quizz.title }}
      </v-btn>
    </div>
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
  background: red;
}
</style>
