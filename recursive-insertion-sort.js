let nums = [7, 4, 1, 5, 3];
let i = 1;
function insertSort(nums, i) {
  if (i === nums.length) return;
  function shift(nums, j) {
    if (nums[j] < nums[j - 1]) {
      let temp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = temp;
      j--;
      shift(nums, j);
    } else return;
  }
  shift(nums, i);
  insertSort(nums, ++i);
}
insertSort(nums, i);
console.log(nums);
