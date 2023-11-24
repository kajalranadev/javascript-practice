function countO(str){
  let counter = 0;
  let sentence = str.toLowerCase();
  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === "o" ){
      counter++
    }
  }
   return counter;
}

const total = countO("Rovor herO")
console.log(total);
