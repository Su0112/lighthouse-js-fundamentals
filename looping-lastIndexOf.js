function lastIndexOf(arr, value) {
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      lastIndex = i;
    }
  }
  return lastIndex;
}
