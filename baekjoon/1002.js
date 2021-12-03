var inputs = ["3", "0 0 13 40 0 37", "0 0 3 0 7 4", "1 1 1 1 1 1"];

for (let i = 1; i <= parseInt(inputs[0]); i++) {
  let input = inputs[i].split(" ").map((x) => parseInt(x, 10));
  const dist = (input[0] - input[3]) ** 2 + (input[1] - input[4]) ** 2;
  if (dist < input[5] ** 2) {
    if (dist === 0 && input[2] === input[5]) console.log(-1);
    else if (dist > (input[5] - input[2]) ** 2) console.log(2);
    else if (dist < (input[5] - input[2]) ** 2) console.log(0);
    else console.log(1);
  } else if (dist < input[2] ** 2) {
    if (dist === 0 && input[5] === input[2]) console.log(-1);
    else if (dist > (input[2] - input[5]) ** 2) console.log(2);
    else if (dist < (input[2] - input[5]) ** 2) console.log(0);
    else console.log(1);
  } else {
    if ((input[5] + input[2]) ** 2 < dist) console.log(0);
    else if ((input[5] + input[2]) ** 2 > dist) console.log(2);
    else console.log(1);
  }
}
