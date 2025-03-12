Array.prototype.myMap = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      // 确保只处理有实际值的元素
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
      // 如果是空元素，保持该空槽
    }
    return result;
  };
  
  
  const arr = [1, 2, ,3, 4];
const result = arr.myMap((item) => item * 2);
console.log(result);  // [2, 4, 6, 8]


Array.prototype.myFilter = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this && callback.call(thisArg, this[i], i, this)) {  // 如果当前元素满足条件
        result.push(this[i]);
      }
    }
    return result;
  };

  Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    console.log("accumulator", accumulator,startIndex,this.length);
  
    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };

  const numbers = [1, 2, 3, 4];
const sum = numbers.myReduce((acc, num) => acc + num,0);
console.log(sum); // 10
  