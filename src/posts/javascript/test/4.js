const obj = {
    name: "张三",
    sayHi(age,gender) {
        console.log(this.name,age,gender);
    }
};

obj.sayHi(); // "张三"
const fn = obj.sayHi
fn(); // ❌ 报错，因为 this 是 undefined
fn.call(obj,17,'girl'); //张三 17 girl