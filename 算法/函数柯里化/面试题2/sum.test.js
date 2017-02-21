"use strict";
var assert = require('assert');
var sum = require('./sum');

describe('简单链式',function(){
  it("sum(1,2)===3",function(){
    assert.equal(sum(1,2),3);
  })
  it("sum(1)(2)===3",function(){
    assert.equal(sum(1)(2),3);
  })
})
