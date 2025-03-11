// function compose(...funcs) {
//     if (funcs.length === 0) return args => args;
//     if (funcs.length ===1) {
//         return funcs[0];
//     }
//     return funcs.reduce((func, next)=>(...args) => func(next(...args)));
// }
function compose(...funcs) {
   if (funcs.length === 0) return args => args;
    if (funcs.length === 1) {
         return funcs[0];
    }
    return funcs.reduce((func,next) => (...args) => func(next(...args)))
}





const arr = [1,2,3,4,5];

const getSum = arr => arr.reduce((acc, cur) => acc + cur, 0);
const add = (x, y) => x + y;
const double = x => x * 2;
const square = x => x * x;
const composedFn = compose(square, double, add);
console.log(composedFn(2,3)); // 36
