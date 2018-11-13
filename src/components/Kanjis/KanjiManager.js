import KanjiJSON from '../../assets/KanjiEN.json'
import Kanji from './Kanji.js'
import Word from './Word.js'
import Pronunciation from './Pronunciation.js'

class KanjiManager {
  constructor () {
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
}

const instance = new KanjiManager()
Object.freeze(instance)

export default instance
