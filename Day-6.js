let arr = [15,10,5,6,8,12,5];

for (let i = 0; i < arr.length; i++) {

    for (let j = arr.length - 1; j > i; j--) {

        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
        }
    }
}

console.log(arr);