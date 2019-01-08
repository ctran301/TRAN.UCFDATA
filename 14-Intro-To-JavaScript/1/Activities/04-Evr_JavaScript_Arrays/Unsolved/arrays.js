var lettersArray = ["a","b","c","d"];

console.log("An array of letters")

var firstletter = lettersArray[0]
var secondletter = lettersArray[1]
console.log("firstletter")
console.log("secondletter")

lettersArray.push("e")
lettersArray.push("f")
console.log("Push to append an item to an array: e, f")

var slicedArray1 =lettersArray.slice(1);
console.log("Slices the array, first one")
var slicedArray2 =lettersArray.slice(0,3);
console.log("Slices the array, 1st and 3rd value")
var slicedArray3 =lettersArray.slice(1,3);
console.log("Slices the array, 1st, 2nd and 3rd value")