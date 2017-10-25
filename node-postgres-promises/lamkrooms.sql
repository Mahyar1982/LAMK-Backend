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
  VALUES ('niemenkatu73', 'b210', 3, 'first');

  INSERT INTO rooms (campus, class_number, capacity, floor)
    VALUES ('kirkkokatu21', 'a110', 5, 'second');

    INSERT INTO rooms (campus, class_number, capacity, floor)
      VALUES ('stahlburgkatu10', 'e305', 25, 'third');
