var express = require('express');
var router = express.Router();

var Docker = require('node-docker-api').Docker;

var docker = new Docker({ socketPath: '/var/run/docker.sock' });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  docker.container.list().then(function(containers) {
    for(var i=0;i<containers.length;i++){
      containers[i].status().then(function(container){ return container.stats()})
        .then(function(stats){
          stats.on('data', function(stat){console.log('Stats: ', stat.toString())});
          stats.on('error', function(err){console.log('Error: ', err)});
        }).catch(function(error){console.log(error)})
    }
  });
});

module.exports = router;
