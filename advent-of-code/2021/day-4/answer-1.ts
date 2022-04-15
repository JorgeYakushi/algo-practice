import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n");

let bingoResults: string[] = input[0].split(",");
let tempArray: string[] = input.slice(2);

let bingoCards: string[] = [];
console.log({ tempArray });
for (let i = 0; i < tempArray.length; i += 6) {
  let temp: string[] = tempArray.slice(i, i + 5);
  console.log(temp);
  temp.map((item) => {
    console.log(item.split(" +"));
  });
}
console.log({ bingoCards });
