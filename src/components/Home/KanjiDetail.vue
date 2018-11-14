<template>
  <div>
    <v-toolbar app fixed>
        <v-btn icon @click="goBack" flat><v-icon>arrow_back</v-icon></v-btn>
    </v-toolbar>
          
    <p id="kanjiDetailCharacter" class="text-japanese text-xs-center">{{ kanji.character }}</p>
    <p id="kanjiDetailTranslation" class="text-xs-center">{{ kanji.translation }}</p>
        <v-layout mx-3>
            <v-flex>
                <v-list class="background-transparent">
                    <v-subheader>Pronunciation</v-subheader>
                    <v-list-tile>

                        <v-list-tile-content>
                            <v-list-tile-title>onyomi: {{ kanji.pronunciation.onyomi }}</v-list-tile-title>
                            <v-list-tile-title>kunyomi: {{ kanji.pronunciation.kunyomi }}</v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <v-subheader>Words</v-subheader>
                    <v-list-tile v-for="word in kanji.words" :key="word.japaneseText" @click="playSound(word.soundURL)">

                        <v-list-tile-content>
                            <v-list-tile-title v-text="word.japaneseText"/>
                        </v-list-tile-content>

                        <v-list-tile-content>
                            <v-list-tile-title class="text-xs-right" v-text="word.translation"/>
                        </v-list-tile-content>

                    </v-list-tile>
                </v-list>
            </v-flex>
    </v-layout>
  </div>
</template>


<script>
export default {
    data() {
        return {
            kanji: this.$route.params.kanji
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : 
                                        this.$router.push({ name: 'home' })
        },
        playSound(soundURL) {
            var sound = new Audio();
            sound.src = soundURL;
            sound.play();
        }
    }
}
</script>

<style scoped>

#kanjiDetailCharacter {
    color: black;
    font-weight: bold;
    font-size: 150px;
}

#kanjiDetailTranslation {
    color: rgb(180, 180, 180);
    font-weight: bold;
    font-size: 30px;
}

.background-transparent {
    background: transparent;
}

.pronunciation-square {
    width: 10px;
    height: 10px;
    background: green;
}
</style>
