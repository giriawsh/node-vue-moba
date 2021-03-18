const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {type: String},
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}//关联的是哪个模型
})

module.exports = mongoose.model('Category', Schema);
