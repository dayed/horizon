var app = require('horizon')({
  
  bootstrap: function () {
    User.findOne({}).exec(function(err,user){
      if(!user)
        User({
          name: 'Admin',
          email: 'admin@horizon.com',
          description: 'Administrator',
          password: Utils.passwordHash('123asd'),
          role: 1,
        }).save(function(err){if(err) console.log(err);});
    });
  },

});

var server = require('http').createServer(app);
server.listen(5321);