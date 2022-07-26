function getArea(arc) { 
 //write your code here
let area = (2*arc/Math.PI)**2
return parseFloat(area.toFixed(2))
 }
 // Do not touch anything below this line :3
 module.exports = getArea