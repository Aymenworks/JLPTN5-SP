<template>
    <v-card class="animateOnHover lightShadow white scaleOnHover" height="130px" :to="{ name: 'kanjiDetail', params: { id: kanjiIndex } }">
        <v-card-text class="kanjiText text-japanese">{{ kanji.character }}</v-card-text>
        <v-divider light/>
        <v-card-text class="kanjiTranslation" >{{ kanji.translation }}</v-card-text>
    </v-card>
</template>

<script>
import Kanji from '../../models/Kanji.js'
import DataManager from '../../Utils/DataManager.js'

export default {
    props: {
        kanjiIndex: {
            type: Number,
            required: true
        }
    },
    computed: {
      kanji: function() {
        return DataManager.kanjis[this.kanjiIndex]
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
  color: rgb(180, 180, 180);
  font-size: 16px;
  text-align: center;
}
.lightShadow {
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.scaleOnHover {
  transition-duration: 0.3s;
}

.scaleOnHover:hover {
  transform: scale(1.1,1.1);
}
</style>