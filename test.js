/*!
 * arr-includes <https://github.com/tunnckoCore/arr-includes>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var arrIncludes = require('./index')

test('should return true if the value exists in the array.', function () {
  var fixture = ['a', 'b', 'c', 'c']
  var actual = arrIncludes(fixture, 'a')
  test.strictEqual(actual, true)
})

test('should return true if the value exists in the array.', function () {
  var fixture = ['a', 'b', 'c', 'c']
  var actual = arrIncludes(fixture, 'd')
  test.strictEqual(actual, false)
})

test('should return true if any of values exists in array', function (done) {
  test.strictEqual(arrIncludes([1, 'bar', 3], 2), false)
  test.strictEqual(arrIncludes([1, 'bar', 3], 3), true)
  test.strictEqual(arrIncludes(['foo', 'bar', 'baz'], ['foo', 'qux']), true)
  done()
})

test('should return false if any of values not exists in array', function (done) {
  var fixture = ['foo', 'bar', 'baz']
  var actual = arrIncludes(fixture, ['aaa', 'bbb'])
  test.strictEqual(actual, false)
  done()
})

test('should not blow up on empty arrays', function () {
  var fixture = []
  var actual = arrIncludes(fixture, 'd')
  test.strictEqual(actual, false)
})

test('should not blow up on null', function () {
  var actual = arrIncludes(null, 'd')
  test.strictEqual(actual, false)
})

test('should not blow up when no value is passed', function () {
  var actual = arrIncludes(null)
  test.strictEqual(actual, false)
})
