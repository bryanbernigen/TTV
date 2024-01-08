//Own modules
const User = require("../Models/UserModel");
const Article = require("../Models/ArticleModel");
const ArticleDetails = require("../Models/ArticleDetailModel");

const addArticle = async (req, res) => {
    const {
        title,
        pictureUrl,
        authorId,
        timeToRead,
        summary,
        content,
        reference,
    } = req.body;

    try {
        //Check if author exists in users collection
        const author = await User.findById(authorId);

        //If author exists, create article
        if (!author) {
            return res.status(400).json({ message: "Author does not exist" });
        }

        const newArticle = new Article({
            title,
            pictureUrl,
        });

        //Save article to articles collection
        const savedArticle = await newArticle.save();

        //Create article details
        const newArticleDetails = new ArticleDetails({
            articleId: savedArticle._id,
            authorId,
            timeToRead,
            summary,
            content,
            reference,
            //Prefefined value===================
            // reviewerId: null,
            isValidated: false,
            publishDate: Date.now(),
            lastUpdateDate: Date.now(),
            // lastReviewDate: null,
        });

        //Save article details to articleDetails collection
        const savedArticleDetails = await newArticleDetails.save();

        //Return
        res.status(201).json({
            status: "success",
            message: "Article created",
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

const getAllArticles = async (req, res) => {};

const getArticle = async (req, res) => {
    const { articleId } = req.params;

    try {
        //Check if article exists in articles collection
        const article = await Article.findById(articleId);

        //If article exists, get article details
        if (!article) {
            return res.status(400).json({ message: "Article does not exist" });
        }

        const articleDetails = await ArticleDetails.findOne({
            articleId,
        });

        //Return
        res.status(200).json({
            status: "success",
            message: "Article found",
            data: {
                title: article.title,
                pictureUrl: article.pictureUrl,
                authorId: articleDetails.authorId,
                reviewerId: articleDetails.reviewerId,
                isValidated: articleDetails.isValidated,
                publishDate: articleDetails.publishDate,
                lastUpdateDate: articleDetails.lastUpdateDate,
                lastReviewDate: articleDetails.lastReviewDate,
                timeToRead: articleDetails.timeToRead,
                summary: articleDetails.summary,
                content: articleDetails.content,
                reference: articleDetails.reference,
            },
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

const updateArticle = async (req, res) => {
    const { articleId } = req.params;

    const {
        title,
        pictureUrl,
        authorId,
        timeToRead,
        summary,
        content,
        reference,
    } = req.body;

    try {
        //Check if article exists in articles collection
        const article = await Article.findById(articleId);

        //If article does not exist, return error
        if (!article) {
            return res
                .status(400)
                .json({ status: "error", message: "Article does not exist" });
        }

        //Check if author exists in users collection
        const author = await User.findById(authorId);

        //If author does not exist, return error
        if (!author) {
            return res
                .status(400)
                .json({ status: "error", message: "Author does not exist" });
        }

        //Update article
        await Article.findByIdAndUpdate(articleId, {
            title,
            pictureUrl,
        });

        //Update article details
        await ArticleDetails.findOneAndUpdate(
            { articleId },
            {
                authorId,
                timeToRead,
                summary,
                content,
                reference,
                lastUpdateDate: Date.now(),
            }
        );

        //Return
        res.status(200).json({
            status: "success",
            message: "Article updated",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteArticle = async (req, res) => {
    const { articleId } = req.params;

    try {
        //Check if article exists in articles collection
        const article = await Article.findById(articleId);

        //If article exists, delete article
        if (!article) {
            return res.status(400).json({ message: "Article does not exist" });
        }

        //Delete article
        await Article.findByIdAndDelete(articleId);

        //Delete article details
        await ArticleDetails.findOneAndDelete({ articleId });

        //Return
        res.status(200).json({
            status: "success",
            message: "Article deleted",
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = {
    addArticle,
    getAllArticles,
    getArticle,
    updateArticle,
    deleteArticle,
};
