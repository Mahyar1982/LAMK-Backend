DROP DATABASE IF EXISTS lamkrooms;
CREATE DATABASE lamkrooms;

\c lamkrooms;

CREATE TABLE rooms (
  ID SERIAL PRIMARY KEY,
  campus VARCHAR,
  class_number VARCHAR,
  capacity VARCHAR,
  floor VARCHAR,
  date VARCHAR,
  time VARCHAR
);

INSERT INTO rooms (campus, class_number, capacity, floor, date, time)
  VALUES ('Niemen', 'b210', '3', 'first', '2017-10-27', 'abcdefghijkl');

  INSERT INTO rooms (campus, class_number, capacity, floor, date, time)
    VALUES ('Kirkko', 'a110', '5', 'second', '2017-10-27', 'abc');

    INSERT INTO rooms (campus, class_number, capacity, floor, date, time)
      VALUES ('Stahlberg', 'e305', '25', 'third', '2017-10-27', 'efg');

      INSERT INTO rooms (campus, class_number, capacity, floor, date, time)
        VALUES ('Niemen', 'b310', '4', 'first', '2017-10-28', 'ab');

        INSERT INTO rooms (campus, class_number, capacity, floor, date, time)
          VALUES ('Kirkko', 'a230', '5', 'second', '2017-10-27', 'eg');

          INSERT INTO rooms (campus, class_number, capacity, floor, date, time)
            VALUES ('Stahlberg', 'e305', '25', 'third', '2017-10-27', 'cde');
