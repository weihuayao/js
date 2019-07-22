'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 有Iterator接口的对象都可以使用运算扩展符 如：Map Generator
 * 
 * 
 */

var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);

var arr = [].concat(_toConsumableArray(map.keys()));
var arr1 = [].concat(_toConsumableArray(map.values()));
//console.log(arr1)


var go = /*#__PURE__*/regeneratorRuntime.mark(function go() {
  return regeneratorRuntime.wrap(function go$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, go, this);
});

//console.log([...go()])
/**
 * 方法用于将两类对象转为真正的数组： 类似数组的对象
   和可遍历（ iterabl e ）对象（包括E S6 新增的数据结构Set 和Map ）。
 *Array . from 还可以接受第二个参数，作用类似于数组的map 方法，用来对每个元素进行
 处理，将处理后的值放入返回的数组。
 *  
*/
var arrLike = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3 // arrLike.length 

  //console.log(Array.from(arrLike))  [ 'a', 'b', 'c', undefined ]
  //console.log(Array.from([1,2,3],x => x*x))
  /**
   * Array.of 方法用于将一组值转换为数组。
   * copyWithin()当前数组内部将指定位置的成员复制到其他位置
   * find 找出第一个符合条件的数组成员。方法的回调函数可以接受3 个参数，依次为当前的值、当前的位置
    和原数组。
   * 的findindex 方法的用法与find 方法非常类似， 返回第一个符合条件的数组
    成员的位置，如果所有成员都不符合条件，则返回-1 。
   */

};console.log([NaN].findIndex(function (y) {
  return Object.is(NaN, y);
})); //0
/**
 * fill方法用于填充数组
 * fill(x , start ,end)
 *  keys()  values() , entries()是对键值对的便利
 * includes() 表示某个数组是否包含给定的值，与字符串的includes 方法类似。
 * 默认为0 。如果第二个参数为负数，则表示倒数的位置、
 * 如果这时它大于数组长度（比如第二个参数为－ 4 ， 但数组长度为3 ），
  则会重置为从 0 开始。 不会误判 NaN
 * */

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = ['a', 'b'].entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        index = _step$value[0],
        elem = _step$value[1];

    console.log(index, elem);
  }

  // test
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var DEFAULTS = {
  url: {
    host: 'example.com',
    port: 7070
  }
};

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
}

processContent();