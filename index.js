/*!
 * arr-includes <https://github.com/tunnckoCore/arr-includes>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Check any of `values` exists on `arr`. Also works as [in-array][].
 *
 * **Example**
 *
 * ```js
 * var arrIncludes = require('arr-includes')
 *
 * console.log(arrIncludes([1, 'bar', 3], 2)) // => false
 * console.log(arrIncludes([1, 'bar', 3], 3)) // => true
 *
 * console.log(arrIncludes([1, 'bar', 3, true], false)) // => false
 * console.log(arrIncludes([1, 'bar', 3, true], true)) // => true
 *
 * console.log(arrIncludes(['foo', 'bar'], 'baz')) // => false
 * console.log(arrIncludes(['foo', 'bar'], 'foo')) // => true
 *
 * console.log(arrIncludes(['foo', 'bar', 'qux'], ['a', 'b', 'c'])) // => false
 * console.log(arrIncludes(['foo', 'bar', 'qux'], ['a', 'b', 'foo'])) // => true
 * ```
 *
 * @param  {Array} `arr` array to check
 * @param  {Array|String} `values` array or anything that [in-array][] supports.
 * @return {Boolean|Number} returns `false` if not found, `true` if **index is 0**
 *                                  from the array, otherwise `number` index
 * @api public
 */

module.exports = function arrIncludes (arr, values) {
  if (!utils.arr.isArray(values)) return utils.inArray(arr, values)
  var len = values.length
  var i = -1

  while (i++ < len) {
    var j = utils.inArray(arr, values[i])
    if (j) {
      return j
    }
  }

  return false
}
