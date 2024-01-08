const express = require("express");
const router = express.Router();

//Own modules
const UserControllers = require("../Controllers/UserController");
const ArticleControllers = require("../Controllers/ArticleController");

//User routes
router.post("/user/add", UserControllers.addUser);
router.get("/user/:id", UserControllers.getUser);

//Article routes
router.post("/article/add", ArticleControllers.addArticle);
router.get("/article/all", ArticleControllers.getAllArticles);
router.get("/article/:articleId", ArticleControllers.getArticle);
router.put("/article/:articleId", ArticleControllers.updateArticle);
router.delete("/article/:articleId", ArticleControllers.deleteArticle);

module.exports = router;