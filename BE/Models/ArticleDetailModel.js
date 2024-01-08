const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const ArticleDetailSchema = new Schema({
    articleId: {type: Types.ObjectId, ref: 'Article', required: true},
    authorId: {type: Types.ObjectId, ref: 'User', required: true},
    reviewerId: {type: Types.ObjectId, ref: 'User', required: false},
    isValidated: {type: Boolean, required: true},
    publishDate: {type: Date, required: false},
    lastUpdateDate: {type: Date, required: false},
    lastReviewDate: {type: Date, required: false},
    timeToRead: {type: Number, required: false},
    summary: {type: [String], required: false},
    content: {type: [String], required: false},
    reference: {type: [String], required: false},
});

const ArticleDetail = mongoose.model('ArticleDetail', ArticleDetailSchema);

module.exports = ArticleDetail;