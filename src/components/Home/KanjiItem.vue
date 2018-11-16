<template>
    <v-card class="animateOnHover lightShadow transparent scaleOnHover" height="130px" :to="{ name: 'kanjiDetail', params: { kanji: kanji } }">
        <v-card-text class="kanjiText text-japanese">{{ kanji.character }}</v-card-text>
        <v-divider light/>
        <v-card-text class="kanjiTranslation" >{{ kanji.translation }}</v-card-text>
    </v-card>
</template>

<script>
import Kanji from '../../models/Kanji.js'

export default {
    props: {
        kanji: {
            type: Kanji,
            required: true
        }
    }
}
</script>

<style scoped>
.kanjiText {
font-weight: bold;
text-align: center;
  font-size: 28px;
}
.kanjiTranslation {
  color: rgb(200, 200, 200);
  font-size: 14px;
  text-align: center;
}
.lightShadow {
  box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}
</style>