//submission challenge
function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }
  const result = [];
  let current = start;
  while (current <= end) {
    result.push(current);
    current += step;
  }
  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
