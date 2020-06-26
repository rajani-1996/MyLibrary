const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const newSchema = new Schema({
    author: String,
    des: String,
    image: String

});
const authordata = mongoose.model('authormodel', newSchema);
module.exports = authordata;