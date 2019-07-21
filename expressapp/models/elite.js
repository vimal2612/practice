var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

var schema = new Schema({
    fullname : {type:String, require:true},
    email: {type:String, require:true},
    mobile:{type:Number, require:true},
    city:{type:String, require:true},
    creation_dt:{type:Date, require:true}
});

module.exports = mongoose.model('Lola',schema,'coco'); 