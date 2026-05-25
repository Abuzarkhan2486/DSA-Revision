//  Closure topic and basic question


function x(){
    for(var i =1 ; i<=5 ; i++){
        
        setTimeout(function () {
            console.log(i);
            
        },i*1000);
    }
    console.log("hello");
    
}
x()


//  in this way we are using var variable so that  output was note come proper 




function x(){
    for(let i =1 ; i<=5 ; i++){
        // console.log(i);
        
        setTimeout(function () {
            console.log(i);
            
        },i*1000);
    }
    console.log("hello");
    
}
x()


// this is the correct way to solve this question