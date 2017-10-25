# Lamk-Rooms-Back
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

## Prerequisites
### Installing
Install the Express generator:
```
npm install express-generator@4 -g
```
Create a new project and install required dependencies:
```
express node-postgres-promises
cd node-postgres-promises
npm install
```
Test:
```
npm start
```
Install pg-promise

```
npm install pg-promise@5 --save
```
Install Bluebird

```
npm onstall bluebird@3 --save
```
### Deployment

create a quiries.js
in 'connectionString', we need to add username and password of psql before localhost. for example(username:postgres, password:123456):
var connectionString = 'postgres://postgres:123456@localhost:5432/puppies';

```
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

```
#### Postgress setup

create lamkrooms.sql

```
DROP DATABASE IF EXISTS lamkrooms;
CREATE DATABASE lamkrooms;

\c lamkrooms;

CREATE TABLE rooms (
  ID SERIAL PRIMARY KEY,
  campus VARCHAR,
  class_number VARCHAR,
  capacity INTEGER,
  floor VARCHAR
);

INSERT INTO rooms (campus, class_number, capacity, floor)
  VALUES ('niemenkatu', 'b210', 3, 'first');
```
### PSQL

install PSQL, set the password: 123456

In command prompt type: psql -U postgres

password: 123456
then type the below commands:

```
DROP DATABASE IF EXISTS lamkrooms;
CREATE DATABASE lamkrooms;

\c lamkrooms;

CREATE TABLE rooms (
  ID SERIAL PRIMARY KEY,
  campus VARCHAR,
  class_number VARCHAR,
  capacity INTEGER,
  floor VARCHAR
);

INSERT INTO rooms (campus, class_number, capacity, floor)
  VALUES ('niemenkatu', 'b210', 3, 'first');
```
#### Routes

index.js

```
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
```
### Running:
#### Get all rooms:

queries.js

```
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
```

#### Get single puppy:

```
function getSinglePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.one('select * from pups where id = $1', pupID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
```
#### Post

```
function createPuppy(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into pups(name, breed, age, sex)' +
      'values(${name}, ${breed}, ${age}, ${sex})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
```
#### Put

```
function updatePuppy(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
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
```
#### Delete

```
function removePuppy(req, res, next) {
  var pupID = parseInt(req.params.id);
  db.result('delete from pups where id = $1', pupID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} puppy`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}
```
#### Error Handling

Update the error handlers in app.js to serve up JSON

```
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});
```
## Built With

This app was built using [Designing a RESTful API With Node and Postgres](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.We7jGGiCw2x).

This readme was built using [Github help](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
## Tested By:

This app was tested using [Restlet Client](chrome-extension://aejoelaoggembcahagimdiliamlcdmfm/restlet_client.html).

