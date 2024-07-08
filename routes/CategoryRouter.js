import express, { text } from "express";
import Category from "../classes/Category.js";
import Course from "../classes/Course.js";
import Question from "../classes/Question.js";
const routerCategory = express.Router();

routerCategory.get('/' , (req , res)=>{
    res.send("you love categories.")
})



/* The code `routerCategory.get('/category-display-all' , (req , res)=>{` is setting up a route in the Express router
`routerCategory` for handling GET requests to the '/category-display-all' endpoint. When a GET request is made to this
endpoint, the callback function `(req, res) => { ... }` will be executed. Inside this callback function, there is some
logic to create and manipulate category and course objects, and eventually send a JSON response back to the client with
the string "catagories3". */
routerCategory.get('/category-display-all' , (req , res)=>{
    let categories2 = ["A","BB", "CCC"];
    let categories = []
    
    let category = new Category(1,"Numbers",["1","2"]);
    categories.push(category);
    categories.push(new Category(1,"Letters",["a","b"]));
    let q1 = new Question(1,"Is this love?",[{text: 'Kinda', correct: true}, {text: 'No', correct: false}])
    let catagories3 = [];
    catagories3.push(new Category(1, "Cat1", [new Course(1,"cat1 Course1",["q1","q2"]), new Course(1,"Cat1 Course2",["q1","q2","q3"])]))
    catagories3.push(new Category(2, "Cat2", [new Course(2,"Cat2Course1",["q1","q2"])]))
    
    Category.categoriesComplete.push(new Category(2, "Cat2", [new Course(2,"Cat2Course1",[q1])]))
    Category.categoriesComplete.push(new Category(3, "Cat3", [new Course(42,"Cat2Course1",[q1])]))
    console.dir(Category.categoriesComplete, { depth: null });
    console.log(("#########################"));
    let jsonCat = JSON.stringify(Category.categoriesComplete[0]);
    const catObject = Category.fromJSON(jsonCat);
    console.log(catObject.courses[0]);
    console.log(jsonCat);
    
    res.render('category-display-all',{categories: categories, categoryCourses:catagories3, catFull: Category.categoriesComplete})
})

export default routerCategory