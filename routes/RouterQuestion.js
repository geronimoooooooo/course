import express from "express";
import Category from "../classes/Category.js";
import Course from "../classes/Course.js";
import Question from "../classes/Question.js";
import Answer from "../classes/Answer.js";
const routerQuestion = express.Router();

routerQuestion.get("/", (req, res) => {
  res.send("you love questions.");
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

routerQuestion.get("/category-display-all", (req, res) => {
  let categories2 = ["A", "BB", "CCC"];
  let categories = [];

  let category = new Category(1, "Numbers", ["1", "2"]);
  categories.push(category);
  categories.push(new Category(1, "Letters", ["a", "b"]));
  let q1 = new Question(1, "Is this love?", [
    { text: "Kinda", correct: true },
    { text: "No", correct: false },
  ]);
  let catagories3 = [];
  catagories3.push(
    new Category(1, "Cat1", [
      new Course(1, "cat1 Course1", ["q1", "q2"]),
      new Course(1, "Cat1 Course2", ["q1", "q2", "q3"]),
    ])
  );
  catagories3.push(
    new Category(2, "Cat2", [new Course(2, "Cat2Course1", ["q1", "q2"])])
  );

  Category.categoriesComplete.push(
    new Category(2, "Cat2", [new Course(2, "Cat2Course1", [q1])])
  );
  Category.categoriesComplete.push(
    new Category(3, "Cat3", [new Course(42, "Cat2Course1", [q1])])
  );
  console.dir(Category.categoriesComplete, { depth: null });
  console.log("#########################");
  let jsonCat = JSON.stringify(Category.categoriesComplete[0]);
  const catObject = Category.fromJSON(jsonCat);
  console.log(catObject.courses[0]);
  console.log(jsonCat);

  res.render("category-display-all", {
    categories: categories,
    categoryCourses: catagories3,
    catFull: Category.categoriesComplete,
  });
});

export default routerQuestion;
