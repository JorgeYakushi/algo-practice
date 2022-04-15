//Given two strings, write a method to decide if one is a permutation of the
//other.
const firstStr: string = "AAaa";
const secondStr: string = "AaAaA";

const isPermutation = (first: string, second: string): boolean => {
  let isPerm: boolean = true;
  if (first.length !== second.length) return false;
  let mapFirst: Map<string, number> = new Map<string, number>();
  let mapSecond: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < first.length; i++) {
    let char = first.charAt(i);
    if (mapFirst.get(char) === undefined) {
      mapFirst.set(char, 0);
    } else {
      mapFirst.set(char, mapFirst.get(char)! + 1);
    }
    let charSecond = second.charAt(i);
    if (mapSecond.get(charSecond) === undefined) {
      mapSecond.set(charSecond, 0);
    } else {
      mapSecond.set(charSecond, mapSecond.get(charSecond)! + 1);
    }
  }
  const keysFirst = mapFirst.keys();

  for (const key of keysFirst) {
    if (mapFirst.get(key) !== mapSecond.get(key)) {
      isPerm = false;
      break;
    }
  }

  return isPerm;
};
console.log(isPermutation(firstStr, secondStr));
