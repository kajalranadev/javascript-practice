function greet(name, message) {
  if (name === undefined) {
    name = "John Doe";
  }

  if (message === undefined) {
    message = "Hello,";
  }

  return message + " " + name;
}

console.log(greet()); 

function greeting(name = "John Doe", message = "Hello,") {
  return message + " " + name;
} 
console.log(greet("Jane Doe")); 
console.log(greet("Jane Doe", "Good morning,")); 
