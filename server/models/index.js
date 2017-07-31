var db = require("../db");

module.exports = {
  messages: {
    get: function(callback) {
      var messageQuery =
        "select * from messages \
        left outer join users \
        on (users.id = messages.userid)";
      db.query(messageQuery, function(err, data) {
        callback(err, data);
      });
    }, // a function which produces all the messages
    post: function(params, param2, param3, callback) {
        //INSERT INTO tails (name, color) VALUES ('Rick', 'Blue'),
      console.log('param3 in models', param3);
      console.log('model post messages test');
      //WARNING user query is only here because chatterbox is lame
      //WARNING please remove the next few lines if you upgrade cbox.

      var userQuery = `insert into users(username) values ('${param3}')`;
      db.query(userQuery);

      //END WARNING MESSAGE
      //END WARNING MESSAGE

      var messageQuery = `insert into messages(text, roomname, userid) values ('${params}', '${param2}', (select id from users where username='${param3}'limit 1))`;
      //select username from users where
      //
      //    //var messageQuery ="insert into messages(message) values ('" + params + "')";
      //console.log('messageQuery', messageQuery);
      db.query(messageQuery, function(err, data) {
        callback(err, data);
      });
    } // a function which can be used to insert a message into the database/
  },

  users: {
    get: function(callback) {
      var userQuery = 'select username from users';
      db.query(userQuery, function(err, data) {
        callback(err, data);
      });
    },

    post: function(params, callback) {
      //console.log('post user model test');
      //INSERT INTO tails (name, color) VALUES ('Rick', 'Blue'),
      var userQuery = `insert into users(username) values('${params}')`;
      db.query(userQuery, function(err, data) {
        //console.log('data', data);
        callback(err, data);
      });

    }
  }
};

/*

var messageQuery =
  "insert into messages(message, roomname) values('" + param1 + "', '"+ param2 + "')";

*/
