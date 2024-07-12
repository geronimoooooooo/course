import express from "express";
import CourseModel from "../models/CourseModel.js";
import Course from "../classes/Course.js";
import QuestionModel from "../models/QuestionModel.js";
import { posts } from "../sharedObjects.js";
// import ArticleModel from "../models/ArticleModel.js";
// import { User } from "./models/users.js";
const routerCourse = express.Router();

routerCourse.get("/", (req, res) => {
  posts.push("courseRouter");
  console.log((posts))
  res.send("you love courses.");
});

routerCourse.get("/create", async (req, res) => {
  // { "cid": 1, "courseName": "Kurs2", "questions": [ "668d935d5bf7038908f29bec", "668d94415bf7038908f29bf2" ] }

  // let course = new Course();
  // course.cid = 1;
  // course.courseName = "Kurs3";
  // course.questions= [
  //   "668d935d5bf7038908f29bec",
  //   "668d94415bf7038908f29bf2"];

  // console.log(JSON.stringify(course));
  // console.log(req.body)
  let course = new CourseModel(req.body);
  console.log(course);
  try {
    await course.save();

    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

routerCourse.get("/courses", getCourses);
// routerCourse.get("/courses", async (req, res) => {  
//   try {
//     let courses = await CourseModel.find().populate("questions");
//     console.log("courses:" + courses);
//     res.send(courses);
//   } catch (error) {
//     res.status(500).send({ error });
//   }
// });

async function getCourses(req, res){
  try {
    let courses = await CourseModel.find().populate("questions");
    console.log("courses:" + courses);
    res.send(courses);
  } catch (error) {
    res.status(500).send({ error });
  }
}

export { routerCourse };