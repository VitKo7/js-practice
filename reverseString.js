// Task
function reverseString(str) {
    return str;
}
reverseString('hello'); // “olleh”
reverseString('Howdy'); // “ydwoH”
reverseString('Greetings from Earth'); // ”htraE morf sgniteerG”

//! --- Solution #1 --- 1. Reverse a String With Built-In Functions
/* function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(''); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
} */

function reverseString(str) {
    var splitString = str.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    return joinArray;
}

// Chaining the three methods together:
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('hello');

//! --- Solution #2 --- 2. Reverse a String With a Decrementing For Loop
function reverseString(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

//! --- Solution #3 --- 3. Reverse a String With Recursion
function reverseString(str) {
    return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');

// OR
function reverseString(str) {
    return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
