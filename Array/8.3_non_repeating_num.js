const firstNonRepeating = (nums) => {
  const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num of nums) {
    if (freq[num] === 1) {
      return num;
    }
  }

  return null;
};

console.log(firstNonRepeating([4, 5, 1, 2, 1, 4, 5]));