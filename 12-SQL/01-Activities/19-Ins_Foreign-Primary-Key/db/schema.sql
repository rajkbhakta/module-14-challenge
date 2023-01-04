DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL PRIMARY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (instructor_id) REFERENCES instructors(id) ON DELETE SET NULL
);
