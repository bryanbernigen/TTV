const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const ArticleDetailSchema = new Schema({
    ArticleId: {type: Types.ObjectId, ref: 'Article', required: true},
    AuthorId: {type: Types.ObjectId, ref: 'User', required: true},
    ReviewerId: {type: Types.ObjectId, ref: 'User', required: false},
    IsValidated: {type: Boolean, required: true},
    PublishDate: {type: Date, required: false},
    LastUpdateDate: {type: Date, required: false},
    LastReviewDate: {type: Date, required: false},
    TimeToRead: {type: Number, required: false},
    summary: {type: [String], required: false},
    Content: {type: [String], required: false},
});

const ArticleDetail = mongoose.model('ArticleDetail', ArticleDetailSchema);

module.exports = ArticleDetail;