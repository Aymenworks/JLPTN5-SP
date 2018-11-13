import Question from './Question.js'
import DataManager from '../Utils/DataManager.js'

export default class Quizz {
  constructor (id, title, resource, hasImage = true) {
    this.id = id
    this.title = title
    this.resource = resource
    this.hasImage = hasImage
    this.questions = null
  }

  static kanjiNumbers = ['一', '二', '三', '四', '五', '六', '八', '九', '十', '百', '三百', '六百', '八百', '千', '万', '十七']

  static numbersQCM () {
    const kanjisForTheQuizz = DataManager.kanjis.filter(kanji => {
      return this.kanjiNumbers.includes(kanji.character)
    })

    var questions = []

    for (var i = 0; i < kanjisForTheQuizz.length; i++) {
      const ramdomIndex = Math.floor(Math.random() * kanjisForTheQuizz.length)
      const kanjiUsedForQuestion = kanjisForTheQuizz[ramdomIndex]
      var possibleAnswers = []

      for (var j = 0; j <= 2; j++) {
        var randomNumberAnswer = Math.floor((Math.random() * 100) + 1).toString()
        while (possibleAnswers.includes(randomNumberAnswer) || randomNumberAnswer == kanjiUsedForQuestion.translation) {
          randomNumberAnswer = Math.floor((Math.random() * 100) + 1).toString()
        }
        possibleAnswers.push(randomNumberAnswer)
      }

      // Add the answer at a random index
      const rightAnswerIndex = Math.floor(Math.random() * 4)
      possibleAnswers.splice(rightAnswerIndex, 0, kanjiUsedForQuestion.translation)

      kanjisForTheQuizz.splice(0, 1)
      // create the new question
      questions.push(new Question(kanjiUsedForQuestion.character, possibleAnswers, kanjiUsedForQuestion.translation))
    }

    const quizz = new Quizz(null, null, null, null)
    quizz.questions = questions

    return quizz
  }
}
