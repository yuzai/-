//测试test1.js
var assert = require('assert');
var test1 = require('./test1');

describe('无序数组乘积最大三元素',function(){
  it('test1',function(){
    assert.equal(test1([1,2,3,5,4,-1,-5,-6]),150);
  });
  it('test1',function(){
    assert.equal(test1([1,2,3,5,4]),60);
  });
  it('test1',function(){
    assert.equal(test1([-1,-2,-3,-5,-4]),-6);
  });
  it('test1',function(){
    assert.equal(test1([-1,-2,3,5,4]),60);
  });
})
