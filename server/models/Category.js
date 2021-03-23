const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String},
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}//关联的是哪个模型
})

schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
});
schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
})

module.exports = mongoose.model('Category', schema);
