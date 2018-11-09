<template>
  <div>
    <v-toolbar fixed>
        <v-menu>
          <v-toolbar-title slot="activator">
            <span>{{ sections[0] }}</span>
            <v-icon light>arrow_drop_down</v-icon>
          </v-toolbar-title>

          <v-list>
            <v-list-tile v-for="section in sections" :key="section">
              <v-list-tile-title v-text="section"/>
            </v-list-tile>
          </v-list>
      </v-menu>
    </v-toolbar>

    <div class="loading" v-if="loading">
      Loading...
    </div>
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
import KanjiJSON from '../../assets/KanjiEN.json'
import {Kanji} from './Kanji.js'
import {Word} from './Word.js'
import {Pronunciation} from './Pronunciation.js'

export default {
  components: {
    KanjiItem
  },
  created() {
    this.loading = true
    this.fetchKanjis()
    this.loading = false
  },
  data() {
    return {
      loading: false,
      kanjis: null,
      sections: [
        "Kanjis", "Hiragana", "Katakana"
      ]
    }
  },
  methods: {
    fetchKanjis() {
        var kanjisList = KanjiJSON[0]['KanjiList']; 
        var kanjisSymbols = [];
        for(var i = 0; i< kanjisList.length; i++) {
          var pronunciation = new Pronunciation(kanjisList[i]['Pronunciation']['Onyomi']['Romaji'], kanjisList[i]['Pronunciation']['Kunyomi']['Romaji']);
          var words = kanjisList[i]['Words'].map(word => new Word(word['Japanese meaning'], word['Translation meaning'], word['Sound URL']));
          var newKanji = new Kanji(
            String(kanjisList[i]['Symbol']), 
            String(kanjisList[i]['Translation']), 
            words,
            pronunciation
          );
          kanjisSymbols.push(newKanji);
        }
        this.kanjis = kanjisSymbols;
    }
  }
}
</script>