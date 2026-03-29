let nums = [3, 2, 3, 4, 5];

let minIndex = 0;
for (let i = 0; i < nums.length - 1; i++) {
  minIndex = i;
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] < nums[minIndex]) {
      minIndex = j;
    }
  }
  let temp = nums[i];
  nums[i] = nums[minIndex];
  nums[minIndex] = temp;
}
console.log(nums);
