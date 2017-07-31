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
      console.log('model post messages test');

      //WARNING user query is only here because chatterbox is lame
      //WARNING please remove the next few lines if you upgrade cbox.

      var userQuery = `insert into users(username) values ('${param3}')`;
      db.query(userQuery);

      //END WARNING MESSAGE
      //END WARNING MESSAGE

      var messageQuery = `insert into messages(text, roomname, userid) values ('${params}', '${param2}', (select id from users where username='${param3}'limit 1))`;
      db.query(messageQuery, function(err, data) {
        callback(err, data);
      });
    }
  },

  users: {
    get: function(callback) {
      var userQuery = 'select username from users';
      db.query(userQuery, function(err, data) {
        callback(err, data);
      });
    },

    post: function(params, callback) {
      var userQuery = `insert into users(username) values('${params}')`;
      db.query(userQuery, function(err, data) {
        callback(err, data);
      });

    }
  }
};
