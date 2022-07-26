function sumPairs(ints, s) { 
 //write your code here
const set = [];
    for(let n of ints) {
        if (set.includes(s - n)) {
          return ([s - n, n]);
        } else {
          set.push(n);
        }
    }
  return undefined
 }
 // Do not touch anything below this line :3
 module.exports = sumPairs