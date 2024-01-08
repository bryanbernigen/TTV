const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    Title: {type: String, required: true},
    PictureUrl: {type: String, required: false},
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;