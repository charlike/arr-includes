'use strict'

var utils = require('lazy-cache')(require)
var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Lazily required module dependencies
 */

require('lazy-arrayify', 'arr')
require = fn // eslint-disable-line no-undef, no-native-reassign, no-global-assign

utils.inArray = function inArray (arr, val) {
  arr = utils.arr.arrayify(arr)
  var len = arr.length
  var i = null

  for (i = 0; i < len; i++) {
    if (arr[i] === val) {
      return i === 0 ? true : i
    }
  }
  return false
}

/**
 * Expose `utils` modules
 */

module.exports = utils
