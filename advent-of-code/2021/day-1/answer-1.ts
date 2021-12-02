import fs from "fs";
import path from "path";
let counter = 0;

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n")
  .filter((f) => f)
  .map((strNumber) => parseInt(strNumber));

input.map((item, index) => {
  counter += input[index] > input[index - 1] ? 1 : 0;
});

console.log({ counter });
