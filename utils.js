'use strict'

var utils = require('lazy-cache')(require)
var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Lazily required module dependencies
 */

require('in-array')
require('isarray', 'isArray')
require = fn // eslint-disable-line no-undef, no-native-reassign, no-global-assign

/**
 * Expose `utils` modules
 */

module.exports = utils
