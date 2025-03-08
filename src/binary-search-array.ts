function binary_search(numbers: number[], target: number): boolean {
  let left = 0;
  let right = numbers.length;
  let middle = Math.floor(left + (right - left) / 2);

  while (left < right) {
    const middleValue = numbers[middle];

    if (middleValue === target) {
      return true;
    }

    if (middleValue > target) {
      right = middle;
    }

    if (middleValue < target) {
      left = middle + 1;
    }

    middle = left + (right - left) / 2;
  }

  return false;
}

console.log(
  binary_search([1, 2, 3, 4, 5], 5),
  binary_search([1, 2, 3, 4, 5], 6)
);
