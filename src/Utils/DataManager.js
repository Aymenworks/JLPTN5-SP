import KanjiJSON from '../assets/KanjiEN.json'
import HiraganaJSON from '../assets/Hiragana.json'
import KatakanaJSON from '../assets/Katakana.json'
import Kanji from '../models/Kanji.js'
import Word from '../models/Word.js'
import Kana from '../models/Kana.js'
import Pronunciation from '../models/Pronunciation.js'

class DataManager {
  constructor () {
    this.loadKanjis()
    this.loadHiraganas()
    this.loadKatakanas()
  }

  loadKanjis () {
    var kanjisList = KanjiJSON[0]['KanjiList']
    var kanjisSymbols = []
    for (var i = 0; i < kanjisList.length; i++) {
      var pronunciation = new Pronunciation(kanjisList[i]['Pronunciation']['Onyomi']['Romaji'], kanjisList[i]['Pronunciation']['Kunyomi']['Romaji'])
      const words = kanjisList[i]['Words'].map(word => new Word(word['Japanese meaning'], word['Translation meaning'], word['Sound URL']))
      const newKanji = new Kanji(
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
    const hiraganaList = HiraganaJSON[0]['HiraganaMonographs']

    var hiraganas = []
    for (var i = 0; i < hiraganaList.length; i++) {
      var hiraganaSection = []
      for (var j = 0; j < hiraganaList[i].length; j++) {
        const kana = new Kana(String(hiraganaList[i][j]['Symbol']), String(hiraganaList[i][j]['Pronunciation']))
        hiraganaSection.push(kana)
      }
      hiraganas.push(hiraganaSection)
    }

    this.hiraganas = hiraganas
  }

  loadKatakanas () {
    const katakanaList = KatakanaJSON[0]['KatakanaMonographs']

    var katakanas = []
    for (var i = 0; i < katakanaList.length; i++) {
      var katakanaSection = []
      for (var j = 0; j < katakanaList[i].length; j++) {
        const kana = new Kana(String(katakanaList[i][j]['Symbol']), String(katakanaList[i][j]['Pronunciation']))
        katakanaSection.push(kana)
      }
      katakanas.push(katakanaSection)
    }

    this.katakanas = katakanas
  }
}

const instance = new DataManager()
Object.freeze(instance)

export default instance
