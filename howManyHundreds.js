//When this function is given a number, it should return how many hundreds fit into that number.
function howManyHundreds(number) {
  return Math.floor(number / 100);
}
console.log(howManyHundreds(1000));

console.log(howManyHundreds(894));

console.log(howManyHundreds(520));

console.log(howManyHundreds(99));

console.log(howManyHundreds(0));
