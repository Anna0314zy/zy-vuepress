class Person {
    constructor(name) {
        this.name = name;
    }
    
    sayHi() {
        console.log(this.name);
    }
}

const BoundPerson = Person.bind({ name: "Alice" });

const p = new BoundPerson("Alice");

console.log(p instanceof Person); 
console.log(p.sayHello); 
p.sayHello()
