//Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures?

const testStrings: string[] = ["abcA", "a", "", "abcdefg", "abcdeafgh"];

const areAllUnique = (str: string): boolean => {
  let allUnique: boolean = true;
  let map: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (map.get(char) === undefined) {
      map.set(char, i);
    } else {
      allUnique = false;
      break;
    }
  }

  return allUnique;
};

testStrings.map((str) => {
  console.log(areAllUnique(str));
});
