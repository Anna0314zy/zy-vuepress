function Animal(name) {
    //构造函数中的属性 都是实例上的属性
    //以_明明都是私有属性
    this.type = "哺乳类";
    this.age = 20;
    this.name = name;
    return {}
  }
  Animal.prototype.say = function() {
    console.log("say" + this.name);
  };
  Animal.flag = "动物"; //静态属性
  let animal = new Animal('狗'); //{}
 const fn = animal.say // undefined
  console.log(animal.flag) //undefined
  //每个对象都有一个__proto__指向所属类的原型
  // 每个原型会有一个constuctor 指向所属类
  console.log(animal.__proto__ === Object.prototype); //true
  console.log(animal.__proto__.constructor === Object); //true
  console.log(animal.constructor === Object); //true
  console.log(Animal.prototype.__proto__ === Object.prototype); //true
  console.log(Object.prototype.__proto__ == null); //true
  console.log(Animal.__proto__ === Function.prototype); //true
  console.log(Function.prototype.__proto__ === Object.prototype); //true