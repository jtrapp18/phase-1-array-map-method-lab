const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//if we use a callback function with one argument, the map will pass the value of the array as the argument

const wordCased = word => word[0].toUpperCase() + word.slice(1)
const sentenceCased = sentence => sentence.split(" ").map(wordCased).join(" ")

const titleCased = () => tutorials.map(sentenceCased)

console.log(sentenceCased("this is a sentence"))
console.log(titleCased(tutorials))


