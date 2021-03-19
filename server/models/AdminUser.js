const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username: {type: String},
    password: {
        type: String, set(val){
            return require('bcryptjs').hashSync(val, 10);
        },
        select: false
    }
})

module.exports = mongoose.model('AdminUser', Schema);
