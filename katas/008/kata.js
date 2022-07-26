function validParentheses(parens) { 
 //write your code here
let counter = 0
  
  for(let i = 0; i < parens.length; i++) {

    if(parens[i] === '(') {
      counter ++
    }

    else if(parens[i] === ')') {
      counter --
    }

    if(counter<0) return false
    
    }
  
  return counter !== 0 ? false : true
 }
 // Do not touch anything below this line :3
 module.exports = validParentheses