function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

console.log(getType(123));     // "Number"
console.log(getType("hello")); // "String"
console.log(getType(null));    // "Null"
console.log(getType(undefined)); // "Undefined"
console.log(getType([]));      // "Array"
console.log(getType({}));      // "Object"
console.log(getType(new Date())); // "Date"
console.log(getType(/abc/));   // "RegExp"
console.log(getType(function() {})); // "Function"
console.log( Object.prototype.toString.call(/abc/))
