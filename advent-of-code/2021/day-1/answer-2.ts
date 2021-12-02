import fs from "fs";
import path from "path";
let counter = 0;

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n")
  .filter((f) => f)
  .map((strNumber) => parseInt(strNumber));

let newArray: number[] = [];
for (let i = 2; i < input.length; i++) {
  newArray.push(input[i] + input[i - 1] + input[i - 2]);
}
newArray.map((item, index) => {
  counter += newArray[index] > newArray[index - 1] ? 1 : 0;
});

console.log({ counter });
