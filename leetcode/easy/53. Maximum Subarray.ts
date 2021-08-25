function maxSubArray(nums: number[]): number {
  let min: number = 0;
  let max: number = -Infinity;

  for (let index: number = 0; index < nums.length; index++) {
    min = Math.max(min + nums[index], nums[index]);
    max = Math.max(max, min);
  }
  return max;
}
console.log(maxSubArray([5, 4, -1, 7, 8]));
