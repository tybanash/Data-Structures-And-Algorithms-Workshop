//defines function reverseString and gives it a parameter str
function reverseString(str) { 
  var palindrome = "str"
  /*
  str is converted to array, array is reversed and converted back to string and checked if the result is equal to str.
  */
  if((str.split("").reverse("").join("")) == str) {
    return true;
  } else {
    return false;
  }

}
console.log(reverseString("racecar"));
console.log(reverseString("go",));
