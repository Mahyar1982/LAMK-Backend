var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:123456@localhost:5432/lamkrooms';
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

module.exports = {
  getAllRooms: getAllRooms
  // getSingleRoom: getSingleRoom,
  // createRoom: createRoom,
  // updateRoom: updateRoom,
  // removeRoom: removeRoom
};
