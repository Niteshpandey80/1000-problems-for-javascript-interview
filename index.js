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


Q . 5 Check whether a year is a leap year. 

var year = 2000;
var leap = false ; 
if(year % 4 === 0 ){
    if(year % 400 ===0 ){
        leap = true ; 
    }else if(year % 100 !== 0 ){
        year = true ; 
        
    }
    else{
    leap = false
}
}
console.log(leap);

6. Check whether a number is divisible by both 3 and 5.
var num = 7 ; 
var val = true ; 
if(num % 3 === 0  ){
   val = true ; 
}else if(num % 5 === 0 ){
    val = true ; 
}
else{
    val = false ; 
}
console.log(val);

7. Swap two numbers without using a third variable.

var a =  3 ; 
var b = 4 ; 
a = a + b ; 
b = a - b ; 
a = a - b 
console.log("a : " ,   a);
console.log(" b :" , b );

8 . Write a program to find the largest of two numbers.

var arr = [3,7,8,5,4] ;
var largest = arr[0] ; 
var secondlargest = arr[0] ;
for(var i = 0 ; i<arr.length ; i++){
   if(largest < arr[i]){
    secondlargest = largest ; 
    largest = arr[i]
   }else if(secondlargest < arr[i] && secondlargest != largest){
      secondlargest = arr[i]
   }
}
console.log(secondlargest);
console.log(largest);

9.Write a program to find the largest of three numbers.

var arr = [3,7,8,5,4] ;
var largest = arr[0] ;
var secondlargest = arr[0] ; 
var thirdlargest = arr[0] ; 

for(var i = 0 ; i<arr.length ; i++){
    if(arr[i] > largest){
        thirdlargest  = secondlargest ; 
       secondlargest = largest ; 
       largest = arr[i] ;  
    }else if(arr[i] > secondlargest){
        thirdlargest = secondlargest ;
        secondlargest  = arr[i]  ; 
    }else if(arr[i]>thirdlargest){
         thirdlargest = arr[i] ; 
    }
}
console.log(largest);
console.log(secondlargest);
console.log(thirdlargest);

10 . Print numbers from 1 to 100.

for(var i=0 ; i<=100 ; i++){
    console.log(i);
}

11. Print numbers from 100 to 1.

for(var i=100 ; i>=0 ; i-- ){
    console.log(i); 
}
