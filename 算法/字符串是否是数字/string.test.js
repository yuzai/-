var assert = require('assert');
var isnum = require('./string');

describe('验证字符串是否是数字',function(){
  it("'0.1'是一个数字",function(){
    assert.equal(isnum('0.1'),true);
  });
  it("'0'是一个数字",function(){
    assert.equal(isnum('0'),true);
  });
  it("'abc'不是一个数字",function(){
    assert.equal(isnum('abc'),false);
  });
  it("'1 a'不是一个数字",function(){
    assert.equal(isnum('1 a'),false);
  });
  it("'2e10'是一个数字",function(){
    assert.equal(isnum('2e10'),true);
  });
  it("' '是一个数字",function(){
    assert.equal(isnum(' '),false);
  });
})
