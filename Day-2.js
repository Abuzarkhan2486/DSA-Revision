// reverse string and check string is pallindrome


let str= "madam"

let reverseStr=""

for(i=str.length-1;i>=0;i--){

    reverseStr=reverseStr +str[i]
}

if(str===reverseStr){

    console.log(str +  " is a same");
    
}else{

    console.log("not ");
    
}

