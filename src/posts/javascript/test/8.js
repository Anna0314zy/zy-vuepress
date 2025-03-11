
Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("myBind 必须调用在函数上");
    }

    const fn = this; // 保留当前实例

    function boundFunction(...innerArgs) {
        return fn.apply(this instanceof boundFunction ? this : context, [...args, ...innerArgs]);
    }

    // 继承fn 的原型关系
    boundFunction.prototype = Object.create(fn.prototype);

    return boundFunction;
};



function sayHi(age, gender) {
    console.log(this.name, age, gender);
}

const person = { name: "张三" };

// 绑定 `person`，并预设 age = 18
const boundFn = sayHi.myBind(person, 18);
boundFn("male"); // "张三", 18, "male"

// 测试 `new` 绑定
function Person(name) {
    this.name = name;
}
const BoundPerson = Person.myBind(person);
const newPerson = new BoundPerson("李四");
console.log(newPerson.name); // "李四"，`new` 绑定优先于 `bind`
console.log(newPerson instanceof Person); // true
console.log(newPerson instanceof BoundPerson); // true