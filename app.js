/********************************************************************************
*                               Falsy Bouncer                                   *
* Remove all falsy values from an array. Falsy values in JavaScript are false,  *
* null, 0, "", undefined, and NaN.                                              *
********************************************************************************/
/*
var x = Boolean("false");
console.log(x);
if (x) {
  // this code is executed
  console.log("executed");
}
*/
// Everything With a "Real" Value is True
//http://www.w3schools.com/js/js_booleans.asp
/*
100 is true
3.14 is true
-15 is true
Any (not empty) string is true
Even the string 'false' is true
Any expression (except zero) is true
*/
/*
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
*/
/*
function filterThis(value) {
  if (value === false || value === "") {
    return false;
  }
  return true;
}

var filtered = [7, "ate", "", false, 9].filter(filterThis);
console.log(filtered);
*/
function bouncer(arr){
  function filterThis(value) {
    if (value === false || value === null || value === 0 ||
        value === "" || value === undefined || value === NaN) {
      return false;
    }
    return true;
  }
var filtered = arr.filter(filterThis);
return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
