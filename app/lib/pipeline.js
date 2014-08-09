'use strict';
/*
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('express-method-override');
var priorities = require('../controllers/priorities');
var tasks = require('../controllers/task');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', tasks.index);
  app.get('/tasks/new', tasks.init);
  app.post('/tasks/new', tasks.create);

  app.get('/priorities', priorities.index);
  app.get('/priorities', priorities.init);
  app.post('/priorities/new', priorities.create);

  console.log('Pipeline Configured');
};*/
