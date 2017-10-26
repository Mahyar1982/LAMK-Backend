var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://mahyar:123456@localhost:5432/lamkrooms';
var db = pgp(connectionString);

// add query functions

function getAllRooms(req, res, next) {
  db.any('select * from rooms')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL rooms'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleRoom(req, res, next) {
  var roomID = parseInt(req.params.id);
  db.one('select * from rooms where id = $1', roomID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE room'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateRoom(req, res, next) {
  db.none('update rooms set campus=$1, class_number=$2, capacity=$3, floor=$4, date=$5, time=$6 where id=$7',
    [req.body.campus, req.body.class_number, req.body.capacity,
      req.body.floor, req.body.date, req.body.time, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllRooms: getAllRooms,
  getSingleRoom: getSingleRoom,
  // createRoom: createRoom,
  updateRoom: updateRoom
  // removeRoom: removeRoom
};
