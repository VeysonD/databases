DROP database IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- ---
-- Table 'Users'
--
-- ---

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'messaes'
--
-- ---


CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  userid INT,
  text VARCHAR(150) ,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
