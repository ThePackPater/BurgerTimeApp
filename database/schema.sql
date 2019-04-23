-- ### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE clients
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (55) NOT NULL,
    devoured BOOLEAN 
	PRIMARY KEY (id)
);