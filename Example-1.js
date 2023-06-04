function moveZerosToEnd(nums) {
    let left = 0;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {

            nums[left] = nums[i];
            left++;
        }
    }


    for (let i = left; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}


const nums = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(nums);
console.log(result);
