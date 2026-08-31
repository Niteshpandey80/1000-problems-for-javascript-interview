Q . 1 .Write a program to check whether a number is even or odd.

const  arr = [2,3,5,7,8,9 ,6]  ; 
const result = arr.map(num=>{
        if(num%2==0){
            return "Even" ;       
        }else{
           return "Odd"
        }
})
console.log(result);


Q . 2 Find the largest of two numbers without using Math.max().

const  arr = [2,3,5,7,8,9 ,6]  ; 
var max = arr[0];
for(var i=1 ; i<arr.length ; i++){
if(max<arr[i]){
    max = arr[i]
}
}
console.log(max);

Q  . 3 find all prime numbers from 1 to 100 in JavaScript 

for(var num = 2 ; num<=100 ; num++ ){
    var isprime = true;
    for(var i=2 ; i<num ; i++){
        if(num % i === 0 ){
            isprime = false ; 
        }
    }
    if(isprime){
        console.log(num); 
    } 
}


Q. 4 Check whether a number is positive, negative, or zero.

const arr = [2,6,4,8,9,-3,-2,0] ; 
for(var i = 0 ; i<arr.length ; i++){
    if(arr[i]<0){
         console.log(arr[i] ,  "Negative");
         
    }
    else if(arr[i]===0){
        console.log(arr[i] ,"Zero");
        
    }
    else{
        console.log(arr[i] ,"Positive");
        
    }
}
