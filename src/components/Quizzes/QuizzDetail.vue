<template>
<div>
    <v-toolbar app fixed>
        <v-btn icon @click="goBack" flat><v-icon>arrow_back</v-icon></v-btn>
    </v-toolbar>
          
    <p id="kanjiDetailCharacter" class="text-japanese text-xs-center">{{ currentQuestion.question }}</p>
    <v-container grid-list-xl>
        <v-layout row wrap >
            <v-flex xs6 v-for="(possibleAnswer, index) in currentQuestion.possibleAnswers" :key="index" :disabled="true" @click="chooseAnswer(possibleAnswer, index)">
                <v-card class="quizzAnswerBlock pa-5 scaleOnHover" :class="answersColors[index]">
                    <v-card-text>{{ possibleAnswer.answer }}</v-card-text>
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
            quizz: this.$route.params.quizz,
            currentQuestionIndex: 0,
            answersColors: [
                "normalState",
                "normalState",
                "normalState",
                "normalState"
            ],
            didAnimationFinish: true
        }
    },
    created() {
        this.quizz.loadNewQuestions()
        console.log("created with quizz " + this.quizz)
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
        nextQuestion() {
            if(this.currentQuestionIndex + 1 > this.quizz.questions.length - 1) {
                this.quizz.loadNewQuestions()
                this.currentQuestionIndex = 0
            } else {
                this.currentQuestionIndex += 1
            }
        },
        resetColors() {
            for(var i = 0; i < this.answersColors.length; i++) {
                this.$set(this.answersColors, i, "normalState")
            }
        },
        chooseAnswer(answer, index) {
            if(this.didAnimationFinish == false) {
                return
            }
            
            this.didAnimationFinish = false 

            if(answer.isRightAnswer) {
                this.$set(this.answersColors, index, "rightAnswer")
            } else {
                this.$set(this.answersColors, index, "wrongAnswer")
                // get index of right answer and put it green
                const rightAnswerIndex = this.currentQuestion.possibleAnswers.findIndex(function(answer) {
                    return answer.isRightAnswer
                })
                this.$set(this.answersColors, rightAnswerIndex, "rightAnswer")
            }

            setTimeout(function(){
                this.nextQuestion()
                this.resetColors()
                this.didAnimationFinish = true
            }.bind(this), 2000);
        },        
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
    border-radius: 4px;
    box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);
}

.rightAnswer {
    background: green;
    color: white;
}

.wrongAnswer {
    background: red;
    color: white;
}

.normalState {
    background: white;
    color: black;
}
</style>
