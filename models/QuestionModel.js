import mongoose, { Schema } from "mongoose";

const QuestionSchema = new mongoose.Schema({
  qid: {
    type: Number,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Schema.Types.Mixed
  }
});

const QuestionModel = mongoose.model("Question", QuestionSchema);
export default QuestionModel;
