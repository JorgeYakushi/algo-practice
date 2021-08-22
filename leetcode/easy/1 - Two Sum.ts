function twoSum(nums: number[], target: number): number[] {
  let map = new Map();

  for (let index: number = 0; index < nums.length; index++) {
    let complement: number = target - nums[index];
    if (map.has(complement)) {
      return [map.get(complement), index];
    }
    map.set(nums[index], index);
  }
}

console.log(twoSum([0, 4, 3, 0], 0));
