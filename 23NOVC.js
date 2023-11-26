console.clear();
function findLargestNumber(num) {
  const maxValue = Math.max(...num);
  console.log(maxValue);
  return maxValue;
}
const numbers = [23, 30, 15, 42, 10];
const largest = findLargestNumber(numbers);
console.log(largest);
