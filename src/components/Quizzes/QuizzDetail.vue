<template>
<div>
    <v-toolbar light>
        <v-btn icon @click="goBack" flat><v-icon>arrow_back</v-icon></v-btn>
    </v-toolbar>
          
    <p id="kanjiDetailCharacter" class="text-japanese text-xs-center">{{ quizz.title }}</p>
    <v-container grid-list-xl>
        <v-layout row wrap  align-center justify-center>
            <v-flex xs6 @click="chooseAnswer">
                <v-card class="quizzAnswerBlock pa-5">
                    <v-card-text class="pa-4">Purple</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 @click="chooseAnswer">
                <v-card class="quizzAnswerBlock pa-5">
                    <v-card-text class="pa-4">Purple</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 @click="chooseAnswer" >
                <v-card class="quizzAnswerBlock pa-5">
                    <v-card-text >Purple</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs6 @click="chooseAnswer" >
                <v-card class="quizzAnswerBlock pa-5">
                    <v-card-text>Purple</v-card-text>
                </v-card>
            </v-flex>
         </v-layout>

    </v-container>

  </div>
</template>


<script>
export default {
    data() {
        return {
            quizz: this.$route.params.quizz
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : 
                                        this.$router.push({ name: 'home' })
        },
        chooseAnswer() {
            console.log("answer choose");
        }
    }
}
</script>

<style scoped>
#kanjiDetailCharacter {
    color: black;
    font-weight: bold;
    font-size: 100px;
}

.quizzAnswerBlock {
    font-weight: bolder;
    font-size: 30px;
    background: transparent;s
      border-radius: 4px;
    box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);

}
</style>
