<template>
  <div>
    <v-toolbar light>
        <v-btn icon @click="goBack" flat><v-icon>arrow_back</v-icon></v-btn>
    </v-toolbar>
          
    <p id="kanjiDetailCharacter" class="text-japanese">{{ kanji.character }}</p>
    <p id="kanjiDetailTranslation">{{ kanji.translation }}</p>
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
        }
    }
}
</script>

<style scoped>

#kanjiDetailCharacter {
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 150px;
}

#kanjiDetailTranslation {
    text-align: center;
    color: rgb(180, 180, 180);
    font-weight: bold;
    font-size: 40px;
}
</style>
