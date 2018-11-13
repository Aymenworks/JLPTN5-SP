import Question from './Question'

export default class Quizz {
  constructor (id, title, resource, hasImage = true) {
    this.id = id
    this.title = title
    this.resource = resource
    this.hasImage = hasImage
  }

  static numbersQCM () {
    const kanjiNumbers = ['一', '二', '三', '四', '五', '六', '八', '九', '十', '百', '三百', '六百', '八百', '千', '万', '十七']
    var questions = []

    for (var i = 0; i < kanjiNumbers.length; i++) {
      const ramdomIndex = Math.floor(Math.random() * kanjiNumbers.length)
      const randomKanjiNumber = kanjiNumbers[ramdomIndex]
      var possibleAnswers = []

      for (var j = 0; j < 4; j++) {
        var randomNumberAnswer = Math.floor((Math.random() * 100) + 1)
        //  while(possibleAnswers.includes(randomNumberAnswer.toString()) || randomNumberAnswer.toString() == )
      }
      console.log(ramdomIndex)
    }
  }
  static randomQCM () {
    const question = new Question('四', ['One', 'Two', 'Three', 'Four'], 'Three')
    return question
  }
}
