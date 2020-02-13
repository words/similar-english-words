var fs = require('fs')
var words = require('an-array-of-english-words')
var levenshtein = require('levenshtein-edit-distance')
var results = {}

words.forEach(function(a) {
  var candidates

  if (results[a]) {
    console.log('`%s` already added', a)
  } else {
    candidates = words.filter(
      b =>
        // Check for similar length first to cheapen the operation:
        Math.abs(b.length - a.length) < 2 && levenshtein(a, b) === 1
    )

    if (candidates.length === 1) {
      results[a] = candidates
      results[candidates[0]] = [a]
      console.log('`%s`: `%j` (and the reverse)', a, candidates)
    } else if (candidates.length > 1) {
      results[a] = candidates
      console.log('`%s`: `%j`', a, candidates)
    }
  }
})

fs.writeFileSync('./words.json', JSON.stringify(results, null, 2) + '\n')
