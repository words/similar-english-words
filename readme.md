# similar-english-words

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Give me a word and I’ll give you an array of words that differ by a single
letter.

A thing to make [`levenmorpher`][levenmorpher] faster.

## Install

[npm][]:

```sh
npm install similar-english-words
```

## Use

```js
var words = require('similar-english-words')

console.log(words.funky)
console.log(words.blank)
console.log(words.not_a_word)
```

Yields:

```js
[
  'flunky',
  'fundy',
  'funk',
  'funks',
  'funny',
  'gunky',
  'hunky',
  'junky',
  'punky'
]
[
  'bank',
  'black',
  'bland',
  'blanks',
  'blink',
  'blunk',
  'brank',
  'clank',
  'flank',
  'lank',
  'plank',
  'slank'
]
undefined
```

## API

### `similarEnglishWords`

`similar-english-words` returns an object where each field is a word and the
value is a list of related words (`Object.<string[]>`).

## License

[ISC][license] © [Zeke Sikelianos][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/similar-english-words.svg

[build]: https://travis-ci.org/words/similar-english-words

[downloads-badge]: https://img.shields.io/npm/dm/similar-english-words.svg

[downloads]: https://www.npmjs.com/package/similar-english-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/similar-english-words.svg

[size]: https://bundlephobia.com/result?p=similar-english-words

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com

[levenmorpher]: https://github.com/words/levenmorpher
