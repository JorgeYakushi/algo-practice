function productExceptSelf(nums: number[]): number[] {
  let arrLength: number = nums.length;

  let ans: number[] = new Array<number>(arrLength);
  ans[0] = 1;
  for (let index: number = 1; index < arrLength; index++) {
    ans[index] = ans[index - 1] * nums[index - 1];
  }
  console.log(ans);
  let rightIndex: number = 1;
  for (let index: number = arrLength - 1; index >= 0; index--) {
    ans[index] = ans[index] * rightIndex;
    rightIndex = rightIndex * nums[index];
  }
  return ans;
}
console.log(productExceptSelf([4, 5, 1, 8, 2]));
