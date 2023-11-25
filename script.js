const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];

  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSubarray.reduce((sum, x) => sum + x, 0) + num > n) {
      // Start a new subarray
      result.push(currentSubarray);
      currentSubarray = [];
    }
    currentSubarray.push(num);
  }

  // Add the last subarray, if any
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
