function moveZeroes(nums) {
  //set end pointer to array

  let last = nums.length - 1;

  //walk through array
  for (let i = 0; i < last; i++) {
    //if i element is zero
    if (nums[i] == 0) {
      //switch nums element with the last element

      [nums[i], nums[last]] = [nums[last], nums[i]];

      //nums.shift();
      //nums.shift(nums[i]);
      //then decriment pointer
      last--;
    }
  }
  return (document.getElementById("scratchpad").innerHTML = nums);
}

moveZeroes([0, 1, 0, 3, 12]);
