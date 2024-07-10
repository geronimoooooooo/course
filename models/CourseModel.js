import mongoose from "mongoose";
import QuestionModel from "./QuestionModel.js";

const CourseSchema = new mongoose.Schema({
  cid: {
    type: Number,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  questions: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question"
 }]
 
});

const CourseModel = mongoose.model("Course", CourseSchema);
export default CourseModel;
