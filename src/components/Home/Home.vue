<template>
  <div>
    <v-toolbar fixed>
        <v-menu>
          <v-toolbar-title slot="activator">
            <span>{{ sections[0] }}</span>
            <v-icon light>arrow_drop_down</v-icon>
          </v-toolbar-title>

          <v-list>
            <v-list-tile v-for="section in sections" :key="section" @click="changeSection">
              <v-list-tile-title v-text="section"/>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>

    <v-container grid-list-lg v-if="kanjis">
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
import DataManager from '../../Utils/DataManager.js'

export default {
  components: {
    KanjiItem
  },
  data() {
    return {
      kanjis: DataManager.kanjis,
      sections: [
        "Kanjis", "Hiragana", "Katakana"
      ]
    }
  },
  methods: {
    changeSection() {
      console.log("click")
    }
  }
}
</script>