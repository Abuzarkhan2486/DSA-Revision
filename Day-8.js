function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Example usage
const numbers = [3, 7, 2, 9, 5];
console.log(findLargest(numbers)); // 9