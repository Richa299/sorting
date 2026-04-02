let arr = [7, 1, 4, 5, 3];
function bubble(arr, n) {
  if (n == 1) return;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  bubble(arr, n - 1);
}
bubble(arr, arr.length);
console.log(arr);
