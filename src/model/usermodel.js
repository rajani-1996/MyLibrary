const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    
    email:String,
    password:String

});

var Userdata = mongoose.model('usermodel',UserSchema);

module.exports = Userdata;
