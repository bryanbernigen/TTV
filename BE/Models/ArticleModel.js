const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    pictureUrl: {type: String, required: false},
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;