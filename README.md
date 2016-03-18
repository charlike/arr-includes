# [arr-includes][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Return true if any of passed values exists in array. Using [in-array][].

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i arr-includes --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const arrIncludes = require('arr-includes')
```

### [arrIncludes](index.js#L40)
> Check any of `values` exists on `arr`. Also works as [in-array][].

**Params**

* `arr` **{Array}**: array to check    
* `values` **{Array|String}**: array or anything that [in-array][] supports.    
* `returns` **{Boolean}**: always boolean false or true, never throws  

**Example**

```js
var arrIncludes = require('arr-includes')

console.log(arrIncludes([1, 'bar', 3], 2)) // => false
console.log(arrIncludes([1, 'bar', 3], 3)) // => true

console.log(arrIncludes([1, 'bar', 3, true], false)) // => false
console.log(arrIncludes([1, 'bar', 3, true], true)) // => true

console.log(arrIncludes(['foo', 'bar'], 'baz')) // => false
console.log(arrIncludes(['foo', 'bar'], 'foo')) // => true

console.log(arrIncludes(['foo', 'bar', 'qux'], ['a', 'b', 'c'])) // => false
console.log(arrIncludes(['foo', 'bar', 'qux'], ['a', 'b', 'foo'])) // => true
```

## Related
* [in-array](https://www.npmjs.com/package/in-array): Return true if a value exists in an array. Faster than using indexOf. | [homepage](https://github.com/jonschlinkert/in-array)
* [is-async-function](https://www.npmjs.com/package/is-async-function): Check that given function is async (callback) function or not. Trying to guess… [more](https://www.npmjs.com/package/is-async-function) | [homepage](https://github.com/tunnckocore/is-async-function)
* [is-installed](https://www.npmjs.com/package/is-installed): Checks that given package is installed on the system - globally or locally. | [homepage](https://github.com/tunnckoCore/is-installed)
* [is-missing](https://www.npmjs.com/package/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github… [more](https://www.npmjs.com/package/is-missing) | [homepage](https://github.com/tunnckocore/is-missing)
* [isarray](https://www.npmjs.com/package/isarray): Array#isArray for older browsers | [homepage](https://github.com/juliangruber/isarray)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/arr-includes/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[in-array]: https://github.com/jonschlinkert/in-array

[npmjs-url]: https://www.npmjs.com/package/arr-includes
[npmjs-img]: https://img.shields.io/npm/v/arr-includes.svg?label=arr-includes

[license-url]: https://github.com/tunnckoCore/arr-includes/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/arr-includes
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/arr-includes.svg

[travis-url]: https://travis-ci.org/tunnckoCore/arr-includes
[travis-img]: https://img.shields.io/travis/tunnckoCore/arr-includes/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/arr-includes
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/arr-includes.svg

[david-url]: https://david-dm.org/tunnckoCore/arr-includes
[david-img]: https://img.shields.io/david/tunnckoCore/arr-includes.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

