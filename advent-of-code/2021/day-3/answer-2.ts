import fs from "fs";
import path from "path";

const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n")
  .filter((f) => f);

const getFilteredArray = (
  arr: string[],
  index: number,
  type: string
): string[] => {
  let counter1: number = 0;
  let counter0: number = 0;
  let bit1: string[] = [];
  let bit0: string[] = [];

  arr.map((item: string) => {
    if (item[index] === "1") {
      counter1 += 1;
      bit1.push(item);
    } else {
      counter0 += 1;
      bit0.push(item);
    }
  });
  let newArr = type === "mostCommon" ? bit1 : bit0;
  if (arr.length === 2) {
    return newArr;
  } else if (counter1 === counter0) {
    return getFilteredArray(newArr, index + 1, type);
  } else {
    if (type === "mostCommon") {
      return counter1 > counter0
        ? getFilteredArray(bit1, index + 1, type)
        : getFilteredArray(bit0, index + 1, type);
    } else {
      return counter1 < counter0
        ? getFilteredArray(bit1, index + 1, type)
        : getFilteredArray(bit0, index + 1, type);
    }
  }
};

let oxygenGenRating = getFilteredArray(input, 0, "mostCommon");
let co2ScrubRating = getFilteredArray(input, 0, "lessCommon");
const result =
  parseInt(oxygenGenRating.join(""), 2) * parseInt(co2ScrubRating.join(""), 2);

console.log({ result });
