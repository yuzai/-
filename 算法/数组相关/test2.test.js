//测试test1.js
var assert = require('assert');
var findTheOne = require('./test2');

describe('寻找',function(){
  it('test1',function(){
    assert.equal(findTheOne([2,3,1,4,5,7],1,7),6);
  });
  it('test2',function(){
    assert.equal(findTheOne([-1,-2,0,1,3,4],-2,4),2);
  });
  it('test3',function(){
    assert.equal(findTheOne([1,3,5,6,7,8,2],1,8),4);
  });
  it('test4',function(){
    assert.equal(findTheOne([5,4,3,2,1,-1,-2],-2,5),0);
  });
})
