let nums = [7, 4, 1, 5, 3];
function quick(arr, low, high) {
  if (low < high) {
    let partition = quicksort(arr, low, high);
    quick(arr, low, partition - 1);
    quick(arr, partition + 1, high);
  }
}

function quicksort(arr, low, high) {
  let i = low;
  let j = high;
  let pivot = arr[i];
  while (i < j) {
    while (arr[i] <= pivot && i <= high) {
      i++;
    }
    while (arr[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
}
quick(nums, 0, nums.length - 1);
console.log(nums);
