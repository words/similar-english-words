var test = require('tape')
var words = require('.')

test('similar-english-words', function(t) {
  t.equal(typeof words, 'object', 'should be an object')
  t.ok('fun' in words, 'should include words')
  t.notOk('funkeldunken' in words, 'should not include non-words')

  t.ok(Array.isArray(words.fun), 'values should be an array')

  t.ok(
    words.fun.includes('funk') &&
      words.fun.includes('fan') &&
      words.fun.includes('sun'),
    'should include related words'
  )

  t.notOk(words.fun.includes('fun'), 'should not include self')

  t.end()
})
