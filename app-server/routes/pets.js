var express = require('express');
var router = express.Router();
var petsCtrl = require('../controllers/petsCtrl');

router.get('/pets', petsCtrl.getPets); // get all the pets
router.post('/pets', petsCtrl.addPet); // add new pet to the shop
router.delete('/pets/:id', petsCtrl.delPet); // delete current pet

module.exports = router;
