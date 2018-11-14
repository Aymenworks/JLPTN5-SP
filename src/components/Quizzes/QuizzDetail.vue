<template>
<div>
    <v-toolbar app fixed>
        <v-btn icon @click="goBack" flat><v-icon>arrow_back</v-icon></v-btn>
    </v-toolbar>
          
    <p id="kanjiDetailCharacter" class="text-japanese text-xs-center">{{ currentQuestion.question }}</p>
    <v-container grid-list-xl>
        <v-layout row wrap >
            <v-flex xs6 v-for="possibleAnswer in currentQuestion.possibleAnswers" :key="possibleAnswer"  @click="chooseAnswer(possibleAnswer)">
                <v-card class="quizzAnswerBlock pa-5">
                    <v-card-text class="">{{ possibleAnswer }}</v-card-text>
                </v-card>
            </v-flex>
         </v-layout>
    </v-container>
  </div>
</template>


<script>
import Quizz from '../../models/Quizz.js'

export default {
    data() {
        return {
            quizz: Quizz.numbersQCM(),
            currentQuestionIndex: 0
        }
    },
    computed: {
        currentQuestion: function() {
            return this.quizz.questions[this.currentQuestionIndex]
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : 
                                        this.$router.push({ name: 'home' })
        },
        chooseAnswer(answer) {
            console.log(answer == this.currentQuestion.answer);
            if(this.currentQuestionIndex + 1 > this.quizz.questions.length - 1) {
                this.currentQuestionIndex = 0
            } else {
                this.currentQuestionIndex += 1
            }
        }
        
    }
}
</script>

<style scoped>
#kanjiDetailCharacter {
    color: black;
    font-weight: bold;
    font-size: 140px;
}

.quizzAnswerBlock {
    font-weight: bolder;
    font-size: 30px;
    background: transparent;
    border-radius: 4px;
    box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);

}
</style>
