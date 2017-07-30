var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('post messages controller test');
      console.log('req.body', req.body);

      var inputContent = req.body.message;
      var inputRoom = req.body.roomname;


      models.messages.post(inputContent, inputRoom, function(err, data) {
        if (err) {
          throw err;
        }
        res.end();
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      //console.log('post user controller test');
      var inputName = req.body.username;
      models.users.post(inputName, function(err, data) {
        if (err) {
          throw err;
        }
        res.end();
      });
    }
  }
};
//
