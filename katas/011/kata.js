function positiveSum(arr) { 
 //write your code here
let newArr = arr.filter(e=>e>0)
return newArr.reduce((acc,current)=>(acc+current))
  
 }
 // Do not touch anything below this line :3
 module.exports = positiveSum