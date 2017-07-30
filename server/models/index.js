var db = require("../db");

module.exports = {
  messages: {
    get: function(callback) {
      // var messageQuery =
      //   "select * from messages \
      //   left outer join users \
      //   on (users.id = messages.userid)";
      // db.query(messageQuery, function(err, data) {
      //   callback(err, data);
      // });
    }, // a function which produces all the messages
    post: function(params, param2, callback) {
        //INSERT INTO tails (name, color) VALUES ('Rick', 'Blue'),


      //var messageQuery ="insert into messages(text) values('" + param1 + "')";
      var messageQuery ="insert into messages(text) values ('" + params + "')";

      //console.log('messageQuery', messageQuery);
      db.query(messageQuery, function(err, data) {
        callback(err, data);
      });
    } // a function which can be used to insert a message into the database//////////
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      var userQuery = "select username from users";
      db.query(userQuery, function(err, data) {
        callback(err, data);
      });
    },

    post: function(params, callback) {
      console.log('post user model test');
      //INSERT INTO tails (name, color) VALUES ('Rick', 'Blue'),
      var userQuery = "insert into users(username) values('" + params + "')";
      db.query(userQuery, function(err, data){
        console.log('data', data);
        callback(err, data);
      });

    }
  }
};

/*

var messageQuery =
  "insert into messages(text, roomname) values('" + param1 + "', '"+ param2 + "')";

*/
