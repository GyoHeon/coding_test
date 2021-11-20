let arr1 = [];
let n = 10;
for (let i = 2; i <= n; i++) {
  arr1.push(i);
}
let arr2 = arr1.slice();
for (let i of arr1) {
}
console.log(arr1, arr2);
