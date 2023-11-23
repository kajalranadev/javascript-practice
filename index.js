// create a function that return a random number from 1 to 50

function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

console.log(getRandomNumber());

// create a function that returns a random even number from 1 to 100

function getRandomEvenNumber() {
  // Generate a random number between 1 and 50
  
  const randomNumber = Math.floor(Math.random() * 50) + 1;

  console.log(randomNumber);

  const randomEvenNumber = randomNumber * 2;

  console.log(randomEvenNumber);

  return randomEvenNumber;
}

const result = getRandomEvenNumber();
console.log(result);
