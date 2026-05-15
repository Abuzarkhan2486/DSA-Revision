
//Fizz Buzz  problem

let num = 25


if (num % 3 === 0 || num % 5 === 0) {
   
     if (num % 3 === 0 && num % 5 === 0) {
       return console.log("fizzandbuzz");
        
    }

    if (num % 3 === 0) {
       return console.log("fizz");

    }
    if (num % 5 === 0) {
      return  console.log("buzz");

    }
}

// find highest value in a given array

let arr=[10,15,20,5,55]
let max= 0

for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

console.log(max);





