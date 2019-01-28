var express = require('express');
var router = express.Router();

var Docker = require('node-docker-api').Docker;

var docker = new Docker({ socketPath: '/var/run/docker.sock' });

/* GET users listing. */
router.post('/', function(req, res, next) {
  var result={};
  docker.container.get(req.body.id).stop().catch(function(error) {
    console.log(error);
    result={body:error};
  });
  console.log(result.body);
  if(result.body===undefined) {
    res.send({ body: 'Success' })
  }else{
    res.send(result);
  }
});

module.exports = router;
