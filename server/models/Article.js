const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: {type: String},
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}], //有可能有多个分类
    body: {type: String},
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', Schema);
