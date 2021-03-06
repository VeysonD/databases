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

    },
    post: function (req, res) {
      console.log('post messages controller test');

      var inputContent = req.body.text;
      var inputRoom = req.body.roomname;
      var inputUsername = req.body.username;

      console.log(req.body);
      console.log(req.body.username);
      models.messages.post(inputContent, inputRoom, inputUsername, function(err, data) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });

    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, data) {
        if (err) {
          console.log('Controller users get error', err);
          throw err;
        }

        res.json(data);
      });

    },
    post: function (req, res) {

      console.log('post user controller test');
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
