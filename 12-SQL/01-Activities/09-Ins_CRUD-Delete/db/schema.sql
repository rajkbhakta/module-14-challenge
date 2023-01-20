-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS inventory_db;
-- Creates the inventory_db database --
CREATE DATABASE inventory_db;

-- use inventory_db database --
USE inventory_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE produce (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  price INT(100)
);

-- Insert multiple produce items --
INSERT INTO produce (id, name, price)
VALUES
    ( 2, "apple", 1.75),
    ( 2, "orange", 500),
    ( 3, "banana", 20),
    ( 3, "pomogranete", 1000);
    
    
    
