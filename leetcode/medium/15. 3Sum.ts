function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let ans: number[][] = [];
  for (let index: number = 0; index < nums.length; index++) {
    if (index !== 0 && nums[index] === nums[index - 1]) continue;
    let secondIndex: number = index + 1;
    let lastIndex: number = nums.length - 1;
    while (secondIndex < lastIndex) {
      if (nums[index] + nums[secondIndex] + nums[lastIndex] === 0) {
        ans.push([nums[index], nums[secondIndex], nums[lastIndex]]);
        secondIndex++;
        while (
          secondIndex < lastIndex &&
          nums[secondIndex] === nums[secondIndex - 1]
        )
          secondIndex++;
      } else if (nums[index] + nums[secondIndex] + nums[lastIndex] < 0) {
        secondIndex++;
      } else {
        lastIndex--;
      }
    }
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
