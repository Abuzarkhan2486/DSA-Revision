// Find all pairs whose sum equals target

function findPairs(arr, target) {
    let seen = new Set();
    let pairs = [];

    for (let num of arr) {
        let complement = target - num;

        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }

        seen.add(num);
    }

    return pairs;
}

// Example
let arr = [1, 2, 3, 4, 5, 6];
let target = 7;

console.log(findPairs(arr, target));

// Output:
// [ [1, 6], [2, 5], [3, 4] ]