let name = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let answer = 0;
let nowIndex = 0;
let nowNum = 65;
const len = name.length;
name = name.split("");
let numArr = name.map(function (x, i) {
  return x.charCodeAt();
});

function joystick(arr, nowI, nowN) {
  let newarr = arr.map(function (x, i) {
    return (
      (Math.abs(26 - x + nowN) > Math.abs(nowN - x)
        ? Math.abs(nowN - x)
        : Math.abs(26 - x + nowN)) +
      (Math.abs(len - i - nowI) > Math.abs(nowI - i)
        ? Math.abs(nowI - i)
        : Math.abs(len - i - nowI))
    );
  });
  return newarr;
}

console.log(joystick(numArr, 0, 65));
