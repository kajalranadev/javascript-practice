const originalArray = [1, 2, 3, 4, 5];
const reverseArray = (arr) => arr.slice().reverse();
const reversedArray = reverseArray(originalArray);

console.log("Reversed Array:", reversedArray);
console.log("Original Array:", originalArray);
