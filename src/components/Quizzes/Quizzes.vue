<template>
  <div>
    <v-layout mx-3>
      <v-flex>
          <v-list class="background-transparent">
            <div v-for="section in sections" :key="section.title">
              <v-subheader>{{ section.title }}</v-subheader>
              <v-list-tile v-for="quizz in section.quizzes" :key="quizz.id" :to="{ name: 'quizzDetail', params: { quizz: quizz } }">
                <v-btn block left flat large class="text-xs-left">
                  <v-icon v-if="quizz.hasImage">{{ quizz.resource }}</v-icon>
                  <div v-else :style="{background: quizz.resource}" class="quizzSquare"/>
                  {{ quizz.title }}
                </v-btn>
              </v-list-tile>
            </div>
          </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import {Quizz} from './Quizz.js'
  
    export default {
        created() {
          console.log('quizzes created');
        },
        data() {
          return {
            sections: [
              {
                title: "Aymen test custom",
                quizzes: [
                  new Quizz(1, "Easy", "red", false),
                  new Quizz(2, "Medium", "red", false),
                  new Quizz(3, "Difficult", "red", false),
                  new Quizz(4, "Words", "home"),
                ]
              },
              {
                title: "More variety of quizzes!",
                quizzes: [
                  new Quizz(5, "Fill in the blanks", "home"),
                  new Quizz(6, "Find the antonyms", "home"),
                  new Quizz(7, "Play with numbers", "home"),
                ]
              }
            ]
          }
        }
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
