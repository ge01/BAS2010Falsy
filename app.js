/********************************************************************************
*                               Falsy Bouncer                                   *
* Remove all falsy values from an array. Falsy values in JavaScript are false,  *
* null, 0, "", undefined, and NaN.                                              *
********************************************************************************/
function bouncer(arr) {
  /*The value passed as the first parameter is converted to a boolean value, if
  necessary. If value is omitted or is 0, -0, null, false, NaN, undefined, or
  the empty string (""), the object has an initial value of false. All other
  values, including any object or the string "false", create an object with an
  initial value of true.*/
  return arr.filter(Boolean);
}

// Input Test Data
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));

// Output Test Data
//[7, "ate", 9]
//["a", "b", "c"]
//[]
//[1, 2]
