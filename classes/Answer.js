export default class Answer {
  constructor(id, answer, correct) {
    this.id = id;
    this.answer = answer;
    this.correct = correct;
  }
  
  static categoriesComplete = []

  static fromJSON(json) {
    const answer = JSON.parse(json);
    return new Answer(answer.id, answer.answer, answer.correct);
  }
}