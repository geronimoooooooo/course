// blog_app/routes/ArticleRouter.js
import express from "express";
import ArticleModel from "../models/ArticleModel.js";
// import { User } from "./models/users.js";
const routerArticle = express.Router();

routerArticle.post("/articles", async (req, res) => {
  /*{"title":"First article3", "content":"Content for the first article"}*/
  const article = new ArticleModel(req.body);

  try {
    await article.save();
    res.send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

routerArticle.get("/articles", async (req, res) => {
    
    try {
     const articles = await ArticleModel.find({});
      res.send(articles);
    } catch (error) {
      res.status(500).send({ error });
    }
  });


export default routerArticle;
