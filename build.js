const words = require('an-array-of-english-words')
const distance = require('leven')
const fs = require('fs')
var results = {}

words.forEach(function (word) {
  if (results[word]) {
    console.log(`${word} already added`)
    return
  }

  var candidates = words.filter(function (_) {
    // check for similar length first to cheapen the operation
    return Math.abs(_.length - word.length) < 2 && distance(_, word) === 1
  })

  if (candidates.length === 1) {
    results[word] = candidates
    results[candidates[0]] = [word]
    console.log(`${word}: ${candidates} (and the reverse)`)
  } else if (candidates.length > 1) {
    results[word] = candidates
    console.log(`${word}: ${candidates}`)
  }
})

fs.writeFileSync('./words2.json', JSON.stringify(results, null, 2))
