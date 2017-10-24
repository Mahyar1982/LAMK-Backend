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

```
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/puppies';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPuppies: getAllPuppies,
  getSinglePuppy: getSinglePuppy,
  createPuppy: createPuppy,
  updatePuppy: updatePuppy,
  removePuppy: removePuppy
};
```
#### Postgress setup

create puppies.sql

```
DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO pups (name, breed, age, sex)
  VALUES ('Tyler', 'Retrieved', 3, 'M');
```

```
psql -f puppies.sql

DROP DATABASE
CREATE DATABASE
CREATE TABLE
INSERT 0 1
```
#### Routes

index.js

```
var express = require('express');
var router = express.Router();
var db = require('../queries');
router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
module.exports = router;
```
queries.js

```
function getAllPuppies(req, res, next) {
  db.any('select * from pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}
```
## Built With

This app was built using [Designing a RESTful API With Node and Postgres](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.We7jGGiCw2x).
