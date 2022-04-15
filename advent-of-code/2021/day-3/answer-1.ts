import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.resolve(__dirname, "poke.txt"))
  .toString()
  .split("\n")
  .filter((f) => f);
console.log(input);
// let counter1: number[] = [];
// let counter0: number[] = [];
// input.map((item: string) => {
//   for (let i: number = 0; i < item.length; i++) {
//     if (item[i] === "1") {
//       counter1[i] = (counter1[i] || 0) + 1;
//     } else {
//       counter0[i] = (counter0[i] || 0) + 1;
//     }
//   }
// });
// let gammaRate: string[] = [];
// let epsilonRate: string[] = [];

// for (let i: number = 0; i < counter1.length; i++) {
//   if (counter1[i] > counter0[i]) {
//     gammaRate.push("1");
//     epsilonRate.push("0");
//   } else {
//     gammaRate.push("0");
//     epsilonRate.push("1");
//   }
// }
// const result =
//   parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2);

// console.log({ result });
