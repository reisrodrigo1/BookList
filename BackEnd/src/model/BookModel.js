const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    macaddress:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);