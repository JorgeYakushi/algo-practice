import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n")
  .filter((f) => f);

let depth: number = 0;
let horizontalPos: number = 0;

input.map((item) => {
  let split: string[] = item.split(" ");
  let direction: string = split[0];
  let amount: number = parseInt(split[1]);
  if (direction === "forward") {
    horizontalPos += amount;
  } else if (direction === "down") {
    depth += amount;
  } else if (direction === "up") {
    depth -= amount;
  }
});
const finalPos: number = horizontalPos * depth;
console.log({ horizontalPos, depth, finalPos });
