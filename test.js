/* global it */

const expect = require('code').expect
const words = require('.')

it('similar-english-words', function () {
  expect(words).to.be.an.object()
  expect(words.fun).to.be.an.array()
  expect(words.fun.indexOf('funk')).to.be.above(-1)
  expect(words.fun.indexOf('fan')).to.be.above(-1)
  expect(words.fun.indexOf('sun')).to.be.above(-1)
  expect(words.fun.indexOf('fun')).to.equal(-1)
  expect(words.funkeldunken).to.not.exist()
})
