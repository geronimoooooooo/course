import express from "express";
import Category from "../classes/Category.js";
import Course from "../classes/Course.js";
import Question from "../classes/Question.js";
import Answer from "../classes/Answer.js";
import QuestionModel from "../models/QuestionModel.js";
const routerQuestion = express.Router();

routerQuestion.get("/", (req, res) => {
  res.send("you love questions.");
});

routerQuestion.get("/qs", async (request, response) => {  
  try {
    const qs = await QuestionModel.find({});
    response.send(qs);
    console.log(qs);
    console.dir(qs, {depth:null});
    qs.forEach(e=>{console.log(e.question)})
  } catch (error) {
    response.status(500).send({ error });
  }
});

routerQuestion.get("/create", (req, res) => {
  let qId = Math.floor( Math.random() * 10000);
  let qText = "Is this real love?";
  let a1 = new Answer(Math.floor(Math.random() * 1000), "Yes", true);
  let a2 = new Answer(Math.floor(Math.random() * 1000), "No", false);
  let a3 = new Answer(Math.floor(Math.random() * 1000), "Who knows", false);
  let aArr = [a1, a2, a3];
  let qObj = new Question(qId, qText, aArr);
  console.log(qObj)
  console.log(JSON.stringify(qObj))
  res.json(qObj);
  let ansCorrect = qObj.answers.find(e=>e.correct == true);
  console.log(ansCorrect.answer)
});

routerQuestion.post("/create", async (req, res)=>{
  // https://localhost/question/create2
  const question = new QuestionModel(req.body);

  try {
    await question.save();
    res.send(question);
  } catch (error) {
    res.status(500).send(error);
  }  
});

export default routerQuestion;
