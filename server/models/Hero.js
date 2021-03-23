const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {type: String},
    avatar: {type: String},
    title: {type: String},
    banner: {type: String},
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}], //有可能有多个分类
    scores: {
        difficult: {type: Number},
        skills: {type: Number},
        attack: {type: Number},
        survive: {type: Number},
    },//复合类型
    skills: [{
        icon: {type: String},
        name: {type: String},
        description: {type: String},
        tips: {type: String},
        delay: {type: String},
        cost: {type: String}
    }],
    items1: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Item'
    }],//顺风出装
    items2: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Item'
    }],//逆风出装
    usageTips: {type: String},
    battleTips: {type: String},
    teamTips: {type: String},
    partners: [{
        hero: {type: mongoose.SchemaTypes.ObjectId, ref: 'Hero'},
        description: {type: String}
    }]//不止选英雄还有描述性文字
})

module.exports = mongoose.model('Hero', Schema, 'heroes');
