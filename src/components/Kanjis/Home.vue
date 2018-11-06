<template>
  <div>
      <v-container grid-list-lg>
        <v-layout align-space-between justify-start row wrap>
          <v-flex xs4 v-for="kanji in kanjis" :key="kanji.character">
             <KanjiItem :kanji="kanji"/>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import KanjiItem from '@/components/Kanjis/KanjiItem'

export default {
  components: {
    KanjiItem
  },
  data() {
    return {
      kanjis: [
        { character: 'o1', translation: 'translation1' },
        { character: 'o2', translation: 'translation2' },
        { character: 'o3', translation: 'translation3' },
        { character: 'o4', translation: 'translation4' },
        { character: 'o5', translation: 'translation5' },
      ]
    }
  }
}
</script>

<style scoped>
.lightShadow {
  box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);
}
.kanjiText {
  color: black;
  font-weight: bold;
  font-size: 28px;
  font-family: Times,serif,"Times New Roman";
}
.kanjiTranslation {
  color: rgb(210, 210, 210);
  font-weight: regular;
  font-size: 14px;
  font-family: Times,serif,"Times New Roman";
}
</style>
