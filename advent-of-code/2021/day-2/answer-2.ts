import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n")
  .filter((f) => f);

let aim: number = 0;
let depth: number = 0;
let horizontalPos: number = 0;

input.map((item) => {
  let split: string[] = item.split(" ");
  let direction: string = split[0];
  let amount: number = parseInt(split[1]);
  if (direction === "forward") {
    horizontalPos += amount;
    depth += aim * amount;
  } else if (direction === "down") {
    aim += amount;
  } else if (direction === "up") {
    aim -= amount;
  }
});

const finalPos: number = horizontalPos * depth;
console.log({ horizontalPos, depth, finalPos });
