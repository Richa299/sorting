let bums = [7, 4, 1, 5, 3];

let left = 0,
  right = nums.length - 1;
let temp = [];
mergeSort(nums, left, right);
function merge(nums, l, m, r) {
  let i = l;
  let j = m + 1;
  while (i <= l && j <= r) {
    if (nums[i] < nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }
  while (i <= l) {
    temp.push(nums[i]);
    i++;
  }
  while (j <= r) {
    temp.push(nums[j]);
    j++;
  }
}
function mergeSort(nums, left, right) {
  if (left >= right) return;
  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
}
console.log(temp);
