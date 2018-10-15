var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
var petScheme = new Schema({
    type: String,
    name: String,
    price: String,
    color: String,
    fluffy: Boolean
});

mongoose.model("pet", petScheme); // create module with schema