'use strict';

//var Mongo = require('mongodb');
//var _     = require('lodash');

// creates getter for db collection
Object.defineProperty(Account, 'collection', {
  get: function(){return global.mongodb.collection('accounts');}
});

function Account(a){
  this.name  = a.name;
  this.color = a.color;
  this.photo = a.photo;
  this.pin = a.pin;
  this.type = a.type;
  this.balance   = a.dep * 1;
  this.numTransacts = 0;
  this.transactions = [];
  this.transferIds = [];
}

Account.create = function(obj, cb){
  var a = new Account(obj);
  Account.collection.save(a, cb);
};

Account.findAll = function(cb){
  //returns only fields need for /accounts view
  Account.collection.find({}, {sort:{name:1}, fields:{name:1, color:1, balance:1, type:1,}}).toArray(function(err, accounts){
    cb(err, accounts);
  });
};

module.exports = Account;
