//测试test1.js
var assert = require('assert');
var sort = require('./sort');
var gen = require('./random_gen');

function compare() {
    var arr = gen();
    console.log(arr);
    if (sort.bubble(arr).toString() === sort.normal(arr).toString()) {
        if (sort.quick(arr).toString() === sort.normal(arr).toString())
          return true;
    }
    return false;
}
describe('测试排序算法', function() {
    it('test1', function() {
      assert.equal(compare(),true);
    })
    it('test2', function() {
      assert.equal(compare(),true);
    })
    it('test3', function() {
      assert.equal(compare(),true);
    })
    it('test4', function() {
      assert.equal(compare(),true);
    })
    it('test5', function() {
      assert.equal(compare(),true);
    })
    it('test6', function() {
      assert.equal(compare(),true);
    })

})
