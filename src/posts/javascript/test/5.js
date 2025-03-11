function Person(name, age) {
    this.name = name;
    this.age = age;
    
    return { // 显式返回一个新对象
        name: "李四",
        age: 25,
        gender: "male"
    };
}

const p1 = new Person("张三", 18);

console.log(p1.name);  // "李四"  (不是 "张三")
console.log(p1.age);   // 25
console.log(p1.gender); // "male"
