<template>
  <div>

    <!-- Switch between kanjis, hiraganas and kana list  -->
    <v-toolbar app fixed>
        <v-menu>
          <v-toolbar-title slot="activator">
            <span>{{ currentSection.label }}</span>
            <v-icon light>arrow_drop_down</v-icon>
          </v-toolbar-title>

          <v-list>
            <v-list-tile v-for="(section,index) in sections" :key="section.label" @click="changeSection(index)">
              <v-list-tile-title v-text="section.label"/>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>

    <v-container grid-list-lg v-if="currentSectionIndex === 0">
       <v-layout align-space-between justify-start row wrap>
        <v-flex xs6 sm4 md3 lg2 v-for="(kanji, index) in currentSection.data" :key="kanji.character">
            <KanjiItem :kanjiIndex="index"/>
        </v-flex>
      </v-layout> 
    </v-container>

    <v-container grid-list-lg v-else>
      <v-layout align-space-between justify-start row wrap>
        <v-flex xs4 v-for="kana in currentSection.data" :key="kana.character">
            <KanaItem :kana="kana"/>
        </v-flex>
      </v-layout> 
    </v-container>
  </div>
</template>

<script>
import KanjiItem from '@/components/Home/KanjiItem'
import KanaItem from '@/components/Home/KanaItem'
import DataManager from '../../Utils/DataManager.js'

export default {
  components: {
    KanjiItem,
    KanaItem
  },
  computed: {
    currentSection: function() {
      return this.sections[this.currentSectionIndex]
    },
  },
  data() {
    return {
      currentSectionIndex: 0,
      sections: [
        { label: "Kanjis", data: DataManager.kanjis},
        { label: "Hiragana", data: DataManager.hiraganas.flat()},
        { label: "Katakana", data: DataManager.katakanas.flat()},
      ]
    }
  },
  methods: {
    changeSection(sectionIndex) {
      this.currentSectionIndex = sectionIndex
    }
  }
}
</script>