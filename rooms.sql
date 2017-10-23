DROP DATABASE IF EXISTS lamk_rooms;
CREATE DATABASE lamk_rooms;

\c lamk_rooms;

CREATE TABLE rooms (
  ID SERIAL PRIMARY KEY,
  campus VARCHAR,
  room_number VARCHAR,
  capacity INTEGER,
  floor_number VARCHAR
);

INSERT INTO rooms (campus, room_number, capacity, floor_number)
  VALUES ('niemenkatu73', '210', 5, 'first');
