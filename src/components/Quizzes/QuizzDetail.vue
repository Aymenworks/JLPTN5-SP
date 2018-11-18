<template>
<div>
    <v-toolbar app fixed>
        <v-btn icon @click="goBack" flat><v-icon>arrow_back</v-icon></v-btn>
    </v-toolbar>
          
    <p id="kanjiDetailCharacter" class="text-japanese text-xs-center">{{ currentQuestion.question }}</p>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap align-center>
            <v-flex xs6 v-for="(possibleAnswer, index) in currentQuestion.possibleAnswers" :key="index" :disabled="true" @click="chooseAnswer(possibleAnswer, index)">
                <v-card class="quizzAnswerBlock scaleOnHover" height="130px" :class="answersColors[index]">
                    <p>{{ possibleAnswer.answer }}</p>
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
                "white",
                "white",
                "white",
                "white"
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
                this.$set(this.answersColors, i, "white")
            }
        },
        chooseAnswer(answer, index) {
            if(this.didAnimationFinish == false) {
                return
            }
            
            this.didAnimationFinish = false 

            if(answer.isRightAnswer) {
                this.$set(this.answersColors, index, "green")
            } else {
                this.$set(this.answersColors, index, "red")
                // get index of right answer and put it green
                const rightAnswerIndex = this.currentQuestion.possibleAnswers.findIndex(function(answer) {
                    return answer.isRightAnswer
                })
                this.$set(this.answersColors, rightAnswerIndex, "green")
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
    font-size: 25px;
    display: table;
    width: 100%;
    border-radius: 4px;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);
}

.quizzAnswerBlock p {
    display: table-cell;
    vertical-align: middle;
}
.scaleOnHover {
  transition-duration: 0.3s;
}

.scaleOnHover:hover {
  transform: scale(1.1,1.1);
}
</style>
