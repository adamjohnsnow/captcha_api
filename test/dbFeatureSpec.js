const Browser = require('zombie');
var expect = require('chai').expect
var supertest = require('supertest')
var assert = require('assert');
var sinon = require('sinon');
var app = require('../index.js');
global.request = supertest(app);

describe('database feature testing', function(){
  const browser = new Browser();
  var stubRandom = sinon.stub(Math, 'random').returns(0);
  it('goes to db path, gets JSON data', function(done){
    browser.visit('http://localhost:7070/db').then(function(){
    }).then(done)
  })

  it('returns a list of tasks', function(done) {
    browser.visit('http://localhost:7070/db').then(function(err, res) {
      var data = res.body;
      console.log(data);
    });
  });
})
