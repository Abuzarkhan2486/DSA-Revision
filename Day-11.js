// Product of Array Except Self



let  nums = [1,2,3,4]



function productExceptSelf(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }

        result.push(product);
    }

    return result;
}

productExceptSelf(nums)


// Output: [24,12,8,6]