// Reverse of an given array


let arr = [29,39,65,80,37,45,23,56]

let newarr=[]

for(i=arr.length-1;i>=0;i--){
    
     newarr.push(arr[i])
    
}

console.log(newarr);


// Sum of all element 

let arr2 = [29,39,65,80,37,45,23,56]

let sum = 0

for(i=arr.length-1;i>=0;i--){
    
     sum= sum + arr2[i]
    
}
 console.log(sum);
 

 // Find Smallest Number in a given array using a function

let arr3=[36,57,32,78,12,65]

 function smallestNumber(arr){
    let smallNumber = arr[0]

    for(i=0;i<arr.length;i++){

        if(arr[i]<smallNumber){
            smallNumber=arr[i]
        }
    }

    return smallNumber
 }

console.log( smallestNumber(arr3));


