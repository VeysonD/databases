var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('controller messages get', req);
      models.messages.get(function(err, data) {
        if (err) {
          console.log('Wow much err', err);
          throw err;
        }
        //console.log('get controller messages data', data);
        res.json(data);
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('post messages controller test');
      //console.log('byebyebyebye');

      var inputContent = req.body.text;
      var inputRoom = req.body.roomname;
      var inputUsername = req.body.username;
      //console.log('post messages message', req);

      models.messages.post(inputContent, inputRoom, inputUsername, function(err, data) {
        if (err) {
          throw err;
        }
        //users.post
        res.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, data) {
        if (err) {
          console.log('Controller users get error', err);
          throw err;
        }
        //console.log('Controller users get data', data);
        res.json(data);
      });

    },
    post: function (req, res) {
      //console.log('hihihihihihi');
      //console.log('post user controller test');
      console.log('Controller users post req', req.body);
      var inputName = req.body.username;
      models.users.post(inputName, function(err, data) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    }
  }
};
