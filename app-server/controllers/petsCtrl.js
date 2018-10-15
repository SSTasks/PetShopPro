var fs = require("fs");
var url = require('url');
var qs = require("querystring");

var mongoose = require('mongoose');
var petModel = mongoose.model('pet');


//GET ALL THE PETS
module.exports.getPets = function(req, res) {
    petModel.find({}, function(err, doc) {
        console.log(doc)
        res.type('application/json');
        res.jsonp(doc);
    });
};

// ADD NEW ITEM
module.exports.addPet = function(req, res){
    let item = {
        "name":req.body.name ? req.body.name : '',
        "price":req.body.price,
        "color":req.body.color,
        "fluffy": req.body.fluffy ? req.body.fluffy : ''
    };

    petModel.create(req.body, function (err, doc) {
        if (err) console.log(err);
        console.log(`Item ${doc} was created`);

        petModel.find({}, function(err, doc){
            res.type('application/json');
            res.jsonp(doc);
        });
    });
};

//DELETE THE PET
module.exports.delPet = function(req, res) {
    console.log(req.params.id);
    petModel.remove({"_id":req.params.id}, function(err, doc){
        console.log(`Item _id: ${req.params.id} was deleted`);

        petModel.find({}, function(err, doc){
            res.type('application/json');
            res.jsonp(doc);
        });
    });
};


