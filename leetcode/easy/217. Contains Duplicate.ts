function containsDuplicate(nums: number[]): boolean {
  let map = new Map();

  for (let index: number = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      return true;
    }
    map.set(nums[index], 0);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
