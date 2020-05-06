function getRandomNumberUpTo (max) {
  return Math.floor(Math.random() * max)
}

const wordElement = document.querySelector('#word-to-guess')
const words = [
  'bankruptcy',
  'refrigerator',
  'ridge',
  'racecar',
  'pantomime',
  'geodesic',
  'Platonic',
  'operator',
  'variable',
  'assignment',
  'methods',
  'syntax',
  'conditional',
  'Boolean',
]

const randomIndex = getRandomNumberUpTo(words.length)
wordElement.innerText = words[randomIndex]


// probably also want to maybe set something in the dom
// help students get started with that
const guessingResults = document.querySelector("#guessing-results")
guessingResults.innerText = '-'.repeat(words[randomIndex].length)