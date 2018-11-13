import KanjiJSON from '../assets/KanjiEN.json'
import HiraganaJSON from '../assets/Hiragana.json'
import KatakanaJSON from '../assets/Katakana.json'
import Kanji from '../models/Kanji.js'
import Word from '../models/Word.js'
import Pronunciation from '../models/Pronunciation.js'

class DataManager {
  constructor () {
    this.loadKanjis()
    this.loadHiraganas()
  }

  loadKanjis () {
    var kanjisList = KanjiJSON[0]['KanjiList']
    var kanjisSymbols = []
    for (var i = 0; i < kanjisList.length; i++) {
      var pronunciation = new Pronunciation(kanjisList[i]['Pronunciation']['Onyomi']['Romaji'], kanjisList[i]['Pronunciation']['Kunyomi']['Romaji'])
      var words = kanjisList[i]['Words'].map(word => new Word(word['Japanese meaning'], word['Translation meaning'], word['Sound URL']))
      var newKanji = new Kanji(
        String(kanjisList[i]['Symbol']),
        String(kanjisList[i]['Translation']),
        words,
        pronunciation
      )
      kanjisSymbols.push(newKanji)
    }
    this.kanjis = kanjisSymbols
  }

  loadHiraganas () {
    console.log(HiraganaJSON[0]['HiraganaMonographs'])
  }
}

const instance = new DataManager()
Object.freeze(instance)

export default instance
