/*!
 * arr-includes <https://github.com/tunnckoCore/arr-includes>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var arrIncludes = require('./index')

test('should return true if the value exists in the array.', function (done) {
  var fixture = ['a', 'b', 'bar', 'qux', 'f', 'g']
  test.strictEqual(arrIncludes(fixture, 'foo'), false)
  test.strictEqual(arrIncludes(['true', 'qqq', 'bar'], true), false)
  test.strictEqual(arrIncludes([true, 'qqq', 'bar'], true), true)
  done()
})

test('should return true if any of values exists in array', function (done) {
  test.strictEqual(arrIncludes([1, 'bar', 3], 2), false)

  test.strictEqual(arrIncludes([1, 'bar', 3], 3), 2)
  test.strictEqual(arrIncludes([1, 'bar', 3], ['foo', 'qq', 3]), 2)
  test.strictEqual(arrIncludes(['foo', 'bar', 'baz'], ['foo', 'qux']), true)
  done()
})

test('should return false if any of values not exists in array', function (done) {
  var fixture = ['foo', 'bar', 'baz']
  var actual = arrIncludes(fixture, ['aaa', 'bbb'])
  test.strictEqual(actual, false)
  done()
})

test('should not blow up on empty arrays', function (done) {
  var fixture = []
  var actual = arrIncludes(fixture, 'd')
  test.strictEqual(actual, false)
  done()
})

test('should not blow up on null', function (done) {
  var actual = arrIncludes(null, 'd')
  test.strictEqual(actual, false)
  done()
})

test('should not blow up when no value is passed', function (done) {
  var actual = arrIncludes(null)
  test.strictEqual(actual, false)
  done()
})

test('should return `true` if match with index zero', function (done) {
  test.strictEqual(arrIncludes(['foo', 'bar', 3], 'foo'), true)
  done()
})

test('should return the index of the match', function (done) {
  var res1 = arrIncludes(['foo', 'bar', 3], 'bar')
  var res2 = arrIncludes(['foo', 444, 'ab', 3], 'ab')
  var res3 = arrIncludes(['foo', false, 'qux', 3], false)
  var res4 = arrIncludes(['foo', 11, 'qux', 'last'], 'last')

  test.strictEqual(res1, 1)
  test.strictEqual(res2, 2)
  test.strictEqual(res3, 1)
  test.strictEqual(res4, 3)
  done()
})
