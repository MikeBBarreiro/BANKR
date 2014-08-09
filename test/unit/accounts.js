/* jshint expr:true */
/*global describe, it, before, beforeEach */
'use strict';

var expect = require('chai').expect;
var Account = require('../../app/models/accounts');
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var db = 'BANKR';
var cp = require('child_process');

describe('Account', function(){
  before(function(done){
    connect(db, function(){
      done();
    });
  });
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/freshdb.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('Should create an account', function(){
    var a = {name:'Ron',
            color: 'Cyan',
            photo:'URL',
            pin: '0878',
            type:'checking',
            dep:'450'};
    var ron = new Account(a);

    expect(ron).to.be.instanceof(Account);
    expect(ron.name).to.equal('Ron');
    expect(ron.color).to.equal('Cyan');
    expect(ron.photo).to.equal('URL');
    expect(ron.pin).to.equal('0878');
    expect(ron.type).to.equal('checking');
    expect(ron.balance).to.equal(450);
    expect(ron.numTransacts).to.equal(0);
    expect(ron.transactions).to.have.length(0);
    expect(ron.transferIds).to.have.length(0);
    });
  });

  describe('.create', function(){
    it('Should create a new acount and save to DataBase', function(done){
      Account.create({name:'Ron', color:'Cyan', photo:'URL', pin: '1234', type:'checking', dep: '925'}, function(err, a){
        expect(a._id).to.be.instanceof(Mongo.ObjectID);
        done();
      });
    });
  });
  describe('.findAll', function(){
    it('Should find all accounts in the Database', function(done){
      Account.findAll(function(err, accounts){

        expect(accounts).to.have.length(8);
        expect(accounts.transfers.id).to.equal(1);
        done();
      });
    });
  });
});
