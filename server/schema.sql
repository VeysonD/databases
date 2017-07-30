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
  userid INT NOT NULL,
  text VARCHAR(150) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

-- ---

-- ---

-- ---
-- Table Properties
-- ---
/* Create other tables and define schemas for them here! */

/*
user should have table,
  //will have its own id (primary key);
  //will have name
  //foreign key to message id

messages table
  //own id (primary key);
  //text (contents);
  //foreign key to rooms;

room table
  //own id (primary key);
  //roomname
  //foreign


  CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
  );

  ADD FOREIGNS HERE and to table messages

*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
