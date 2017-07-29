DROP database IF EXISTS chat;

CREATE DATABASE chat;


USE chat;

-- ---
-- Table 'Users'
--
-- ---
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'room'
--
-- ---

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  id INT  NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(150) NOT NULL,
  id_room INT,
  id_user INT,
  PRIMARY KEY (id)
);



ALTER TABLE messages ADD FOREIGN KEY (id_room) REFERENCES rooms (id);
ALTER TABLE messages ADD FOREIGN KEY (id_user) REFERENCES users (id);





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

objectId table (maybe)
  //own id (primary key)
  //user (foreign key)
  //message (foreign key)


*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
