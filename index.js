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
