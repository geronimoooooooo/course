class Question {
  constructor(qid, question, answers) {
    this.qid = qid;
    this.question = question;
    this.answers = answers;
  }

  static fromJSON(json) {
    const q = JSON.parse(json);
    return new Category(q.qid, q.question, q.answers);
  }
}
export default Question