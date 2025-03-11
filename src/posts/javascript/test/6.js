function myInstanceof(obj, constructor) {
    let proto = Object.getPrototypeOf(obj);
    while(proto) {
        if(proto === constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

console.log(myInstanceof([], Array)); // true
console.log(myInstanceof({}, Array)); // false