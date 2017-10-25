var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/rooms', db.getAllRooms);
// router.get('/api/rooms/:id', db.getSingleRoom);
// router.post('/api/rooms', db.createRoom);
// router.put('/api/rooms/:id', db.updateRoom);
// router.delete('/api/rooms/:id', db.removeRoom);

module.exports = router;
