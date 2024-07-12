import mongoose from "mongoose";
import CourseModel from "./CourseModel.js";

const CategorySchema = new mongoose.Schema({
  id: {
    type: Number    
  },
  name: {
    type: String,
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
 }]
 
});

const CategoryModel = mongoose.model("Category", CategorySchema);
export default CategoryModel;
