/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
    var string = "This Works!";
    return string;
}

console.log(test())

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

//number, loop


function sum(numArray) {
    var total = 0;
    for (i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }
    return total;

}

console.log(sum([1, 2, 3]))






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

//array, loop, map

function doubleNumbers(array) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray[i] = array[i] * 2;

    }
    return newArray;
}

console.log(doubleNumbers([1, 2, 3]))
    //
    //
    //
    //
    //
    // /*
    // ----------------------------------------
    // CHALLENGE
    // ----------------------------------------
    //
    // Write function named multiplyNumbers that will take an array of numbers and
    // return an array with those numbers multiplied by another value
    //
    // Examples:
    //
    // - if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
    // - if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
    // */
    //
    // // array, loop, map
    //
function multiplyNumbers(array, value) {
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray[i] = array[i] * value;

    }
    return newArray;
}

console.log(multiplyNumbers([1, 2, 3], 0))
console.log(multiplyNumbers([1, 2, 3], 5))



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

//string, loop, map

function doubleLetters(str) {
    str = str.split('')
    let newArr = str.map(el => el + el)
    return newArr.join('')
}

console.log(doubleLetters("abc"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

//adding "interleave" arrays//

//string, loop, join, "", map


function interleave(array1, array2) {
    var arrayCombined = [];
    for (i = 0; i < array1.length; i++) {
        arrayCombined.push(array1[i]);
        arrayCombined.push(array2[i]);
    }
    return arrayCombined;
}
//
console.log(interleave(["a", "b", "c"], ["x", "y", "z"]))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

//# and value -> array, loop, iterate a certain number of times, map

function createRange(number, value) {
    newArray = [];
    // return string * number;

    for (i = 0; i < number; i++) {

        newArray.push(value);
    }

    return newArray;

}


console.log(createRange(4, "Hello"))



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

//array -> object + number in array, loop?, map


// function flipArray(adverb, color, animal) {
//     newObj = {};
//     for (var adverb in object) { 
//         var value = object[key];   // ...
//
//         object = {
//             adverb: adverb,
//             color: color,
//             animal: animal,
//         }
//         newObj = object[i];
//     }
//     return newObj;
// }
//
// console.log(flipArray("quick", "brown", "fox"))

function flipArray(array) {
    var object = new Object();
    for (var i = 0; i < array.length; i++) {
        object[array[i]] = i;
    };
    return object;
};
var testarray = ["quick", "brown", "fox"];


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

//array of 2 arrays -> object + key/value pairs, loop, map

function arraysToObject(array) {
    var newObj = {};
    for (i = 0; i < array.length; i++) {
        newObj[array[i][0]] = array[i][1];
    }

    return newObj;
}

console.log([
    [2014], "Horse"
], [
    [2015], "Sheep"
])

// function arraysToObject(arr){
//   let obj = {}
//   for (i=0; i<arr.length; i++){
//     obj[arr[i][0]]= arr[i][1]
//   }
//   return obj
// }

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh", map
*/

//string -> string in reverse

function reverseString(string) {
    newString = [];
    for (i = string.length; i >= 0; i--) {
        newString.push(string.charAt(i))
    }
    return newString.join("");
}

console.log(reverseString("hello"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

//string -> boolean, loop then change conditionally(boolean)

function repeats(string) {
    var firstHalf = string.slice(0, string.length / 2);
    var secondHalf = string.slice(string.length / 2, string.length)
    if (string.length % 2 === 0 && firstHalf === secondHalf) {
        return true
    } else {
        return false
    }

}

console.log(repeats("haha"))
console.log(repeats("yay"))
console.log(repeats("heehaw"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

//string -> string with every other character (++2 instead of ++1?), filter

function everyOther(string) {
    var test = false;
    var newString = [];

    for (i = 0; i < string.length; i++) {
        test = !test;
        if (test === true)
            newString.push(string[i])
    }
    return newString.join("");
}

console.log(everyOther("abcdef"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

//string -> boolean, (conditionall if all characters === same)


function allEqual(string) {
    var boolean = true;
    var array = string.split("")
    for (i = 1; i < string.length; i++) {
        if (array[i] !== array[i - 1]) {
            boolean = false;
        }

    }
    return boolean;
}

console.log(allEqual("aaa"))
console.log(allEqual("aba"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

//string -> sum of strings, loop, change to numbers, output new sum string, map

function sumLetters(string) {
    var output
    var array = string.split("");
    if (string === "") {
        output = 0;
    } else {
        output = array.reduce((a, b) => (Number(a) + Number(b)))
    }
    return output
}

console.log(sumLetters("45"))
console.log(sumLetters("246"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

//string -> number, loop to count vowels? === a, === e, === o, === i, === u?, reduce

function countVowels(string) {
    function vowels(value) {
        if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u") {
            return value;
        }
    }
    var array = string.split("");
    var vowelArray = array.filter(vowels);
    return vowelArray.length;

}

console.log(countVowels("you"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

//string -> array, loop to return word split into string letters, map

function split(string) {
    var newArray = [];
    for (i = 0; i < string.length; i++) {
        newArray.push(string.charAt(i))
    }
    return newArray;
}

console.log(split("you"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

//string -> numbers (points), assign point system to letters?, map, loop

function getCodePoints(string) {
    var newArray = [];
    for (i = 0; i < string.length; i++) {
        newArray.push(string.codePointAt(i));

    }
    return newArray;
}

console.log(getCodePoints("Hello"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

//string -> object + position in string, map, loop,

function letterMap(string) {
    var newObject = {};
    for (i = 0; i < string.length; i++) {
        newObject[string.charAt(i)] = i
    }
    return newObject;

}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

//string -> object with string letters and number of occurrences?

function letterCount(string) {
    var newObject = {}
    for (i = 0; i < string.length; i++) {
        if (newObject[string.charAt(i)]) {
            newObject[string.charAt(i)]++
        } else {
            newObject[string.charAt(i)] = 1
        }
    }
    return newObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

//number -> boolean, conditional, loop

function threeOdds(number1, number2) {
    var count = 0;
    for (i = number1 + 1; i < number2; i++) {
        if (i % 2 !== 0) {
            count++
        }
    }
    if (count > 2) {
        return true;
    } else {
        return false
    }
}

console.log(threeOdds(0, 2));
console.log(threeOdds(0, 6));

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

//string -> string with padding characters to left, map

//ISSUE HERE THAT BREAKS CODE

function leftPad(string, length, fillCharacter) {
    var newString = "";
    if (string.length < length) {
        for (let i = 0; i < (length - string.length); i++) {
            newString += fillCharacter
        }
        return newString + string;
    } else {
        return string
    }
}

console.log(leftPad("a", 3, "*"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

// number + string letter - > string letter * number, map, loop

function createString(number, letter) {
    var newString = "";
    for (i = 1; i <= number; i++) {
        newString += letter;

    }
    return newString;
}

console.log(createString(3, "a"))
console.log(createString(2, "b"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

//number -> factorial of number, reduce,

function factorial(number) {
    var newNumber = 1;
    for (i = number; i > 0; i--) {
        newNumber *= i
    }
    return newNumber;

}

console.log(factorial(4))
console.log(factorial(5))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

//array -> array of numbers from 1 to that number, map?,


function arrayOfNumbers(number) {
    var newArray = [];
    for (i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(arrayOfNumbers(1))
console.log(arrayOfNumbers(3))

// function arrayOfNumbers(num){
//   let arr = []
//   for (i=1; i<=num; i++){
//     arr.push(i)
//   }
//   return arr
// }


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

//number -> object with those numbers and if even or odd, map, conditional?

function evenOdd(number1, number2) {
    var newObject = {};
    if (number1 === 0 && number2 === 0) {
        return newObject;
    }
    for (i = number1; i <= number2; i++) {
        var test = "odd"
        if (i % 2 === 0) {
            test = "even"
        }
        newObject[i.toString()] = test
    }
    return newObject
}

console.log(evenOdd(1, 4))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

//number + string -> object ("keys repeated one more each time up to that number), loop, conditional?,

function growingKeys(number, string) {
    var newObject = {};
    var key = "";
    if (number === 0) {
        return newObject
    }
    for (i = 0; i < number; i++) {
        key += string
        newObject[key] = true
    }
    return newObject
}

console.log(growingKeys(2, "d"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

//array + value -> boolean true if all elements in array === same value, loop, conditional

function every(array, value) {
    var boolean = true;
    array.forEach(el => {
        if (el !== value) {
            boolean = false
        }
    })
    return boolean;
}

console.log(every([1, 1]))
console.log(every([1, 2]))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

//array + value -> boolean, if at least 1 element in array === same as value given, loop, conditional

function some(array, value) {
    if (array.indexOf(value) > -1) {
        return true
    } else {
        return false
    }
}
console.log(some([1, 2], 1))
console.log(some([3, 2], 1))

// function some(arr, val){
//   if (arr.indexOf(val) > -1){
//     return true
//   } else {
//     return false
//   }
// }


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

//array -> string of elements joined by ", and ", loop, map

function toSentence(array) {
    var newString = "";
    if (array.length === 0) {
        return newString
    }
    var temp = array[array.length - 2] + " and " + array[array.length - 1]
    for (i = 0; i < array.length - 2; i++) {
        newString += array[i] + ", ";
    }
    return newString + temp;
}

console.log(some(["Sue", "Will"]))
console.log(some(["Sue", "Will", "Rachel"]))


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

//array -> string that is acronym of that array, loop, map

function acronym(array) {
    var newString = [];
    for (i = 0; i < array.length; i++) {
        newString.push(array[i].charAt(0))

    }
    return newString.join("");
}

console.log(acronym(["Sue", "Will"]))
console.log(acronym(["Java", "Script", "Object", "Notation"]))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

//array -> number that is lowest value inside that array, reduce

function min(array) {
    if (array.length === 0) {
        return undefined
    } else {
        let king = Infinity
        array.forEach(el => {
            if (el <= king) {
                king = el
            }
        })
        return king
    }
}

console.log(min([0, -3, 2, 5]))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

//array of objects + property name -> object (keys are the specified property), map

function index(array, property) {
    var newObj = {}
    if (array.length === 0) {
        return newObj
    } else {
        array.forEach(el => {
            newObj[el[property]] = el
        })
    }
    return newObj
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

// object -> object (keys and values are inverted), map


function invert(object) {
    var newObj = {};
    for (var key in object) {
        newObj[object[key]] = key
    }
    return newObj;
}

console.log(invert({
    id: 1,
    name: "Joe"
}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

//object + name -> object {"keys - "signed"": " - <name>", map

function addSignature(name, obj) {
    let output = {}
    for (var key in obj) {
        let newKey = key + '-signed'
        let newVal = obj[key] + ' - ' + name
        output[newKey] = newVal
    }
    return output
}

console.log(addSignature({
    "contract": "foo"
}, "Fred"))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

//object -> array of strings of key/value pairs, map,

function pairs(obj) {
    let arr = []
    for (var key in obj) {
        let str = `${key} - ${obj[key]}`
        arr.push(str)
    }
    return arr
}

console.log(pairs({
    name: "Will",
    age: 24
}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

//object -> number (sum of values), reduce, loop


function sumValues(obj) {
    var number = 0;
    for (var key in obj) {
        number += obj[key]
    }
    return number;
}

console.log(sumValues({
    a: 1,
    b: 2
}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

//object -> name of property with highest value, filter

function biggestProperty(obj) {
    var king = undefined
    let temp = -Infinity
    for (var key in obj) {
        if (temp < obj[key]) {
            king = key
            temp = obj[key]
        }
    }
    return king;
}

console.log(biggestProperty({
    1999: 4036,
    2000: 7654
}))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

//object + value -> name of property that matches === value, filter

function keyForValue(obj, val) {
    let temp = undefined
    for (var key in obj) {
        if (obj[key] === val) {
            temp = key
        }
    }
    return temp
}

console.log(keyForValue({
    1999: 4036,
    2000: 7654
}, 4036))

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

//object + value -> boolean, true if object contains that same value, conditional,

function containsValue(obj, val) {
    for (var key in obj) {
        if (obj[key] === val) {
            return true
        }
    }
    return false
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

//object -> name of property with highest value, filter

function biggestProperty(object) {


}

console.log(biggestProperty({
    1999: 4036,
    2000: 7654
}))




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

//object + value -> name of property that matches === value, filter

function keyForValue(object, value) {
    var newObj = {};
    for (i = 0; i < object.length; i++) {

    }
    return newObj;

}

console.log(keyForValue({
    1999: 4036,
    2000: 7654
}, 4036))





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

//object + value -> boolean, true if object contains that same value, conditional,

function containsValue(object, value) {
    var boolean = false;
    for (i = 0; i < object.length; i++) {

    }
    return boolean;
}

console.log(containsValue({
    1999: 4036,
    2000: 7654
}, 4036))
