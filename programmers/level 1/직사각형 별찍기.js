process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  //높이
  for (let i = 0; i < b; i++) {
    //넓이
    for (let j = 0; j < a; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
});
