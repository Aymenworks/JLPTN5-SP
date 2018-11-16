import Question from './Question.js'
import DataManager from '../Utils/DataManager.js'
import Answer from './Answer.js'

export const QuizzType = {
  ALLKANJI: 'allkanji',
  NUMBER: 'number'
}

export const QuizzLevel = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
}

export class Quizz {
  constructor (id, title, color, type, level = null) {
    this.id = id
    this.title = title
    this.color = color
    this.type = type
    this.level = level
  }

  static kanjiNumbers = ['一', '二', '三', '四', '五', '六', '八', '九', '十', '百', '三百', '六百', '八百', '千', '万', '十七']

  loadNewQuestions () {
    switch (this.type) {
      case QuizzType.NUMBER:
        this.questions = Quizz.numbersQuizz()
        break
      case QuizzType.ALLKANJI:
        this.questions = Quizz.kanjiQuizz(this.level)
        break
    }
  }

  static kanjiQuizz (level) {
    const kanjisForTheQuizz = DataManager.kanjis.filter(kanji => {
      switch (level) {
        case QuizzLevel.EASY:
          return kanji.numberOfStrokes <= 4
        case QuizzLevel.MEDIUM:
          return kanji.numberOfStrokes >= 4 && kanji.numberOfStrokes <= 6
        case QuizzLevel.HARD:
          return kanji.numberOfStrokes >= 6
      }
    })

    var questions = []

    for (var i = 0; i < kanjisForTheQuizz.length; i++) {
      const ramdomIndex = Math.floor(Math.random() * kanjisForTheQuizz.length)
      const kanjiUsedForQuestion = kanjisForTheQuizz[ramdomIndex]
      var possibleAnswers = []

      for (var j = 0; j <= 2; j++) {
        var randomIndexAnswer = Math.floor(Math.random() * kanjisForTheQuizz.length)
        while (possibleAnswers.includes(DataManager.kanjis[randomIndexAnswer].translation) || DataManager.kanjis[randomIndexAnswer] == kanjiUsedForQuestion.translation) {
          randomIndexAnswer = Math.floor(Math.random() * kanjisForTheQuizz.length)
        }
        const answer = new Answer(DataManager.kanjis[randomIndexAnswer].translation, false)
        possibleAnswers.push(answer)
      }

      // Add the answer at a random index
      const rightAnswerIndex = Math.floor(Math.random() * 4)
      const rightAnswer = new Answer(kanjiUsedForQuestion.translation, true)
      possibleAnswers.splice(rightAnswerIndex, 0, rightAnswer)

      // create the new question
      const question = new Question(kanjiUsedForQuestion.character, possibleAnswers)
      questions.push(question)
    }

    return questions
  }

  static numbersQuizz () {
    const kanjisForTheQuizz = DataManager.kanjis.filter(kanji => {
      return Quizz.kanjiNumbers.includes(kanji.character)
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
        const answer = new Answer(randomNumberAnswer, false)
        possibleAnswers.push(answer)
      }

      // Add the answer at a random index
      const rightAnswerIndex = Math.floor(Math.random() * 4)
      const rightAnswer = new Answer(kanjiUsedForQuestion.translation, true)
      possibleAnswers.splice(rightAnswerIndex, 0, rightAnswer)

      // create the new question
      const question = new Question(kanjiUsedForQuestion.character, possibleAnswers)
      questions.push(question)
    }

    return questions
  }
}
