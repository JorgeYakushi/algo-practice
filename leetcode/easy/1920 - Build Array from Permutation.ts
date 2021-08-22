function buildArray(nums: number[]): number[] {
  let ans: number[] = [];
  nums.map((index) => {
    ans[index] = nums[nums[index]];
  });
  return ans;
}
