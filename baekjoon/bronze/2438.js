var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8");

for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write(`*`);
    }
    console.log();
}