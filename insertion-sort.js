let arr = [3, 2, 3, 4, 5];
for (let i = 1; i < arr.length; i++) {
  let j = i;
  while (arr[j] < arr[j - 1]) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
    j--;
  }
}
console.log(arr);
