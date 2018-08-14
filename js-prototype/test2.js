function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}

var p1 = new Person('tom', 12, 'it');
var p2 = new Person('jack', 23, 'ceo');

p1.sayName();
p2.sayName();

console.log(typeof Person);//function
console.log(typeof p1);//object
console.log(typeof p2);//object

console.log(typeof Person.prototype);//object
console.log(p1.prototype);//undefined 函数对象才有prototype

console.log(typeof p1.constructor);//function
console.log(p1.constructor == Person);//true
console.log(p2.constructor == Person);//true
console.log(Person.prototype.constructor == Person);//true

// p1 p2是Person的实例
// 这两个实例都有一个 constructor （构造函数）属性，该属性（是一个指针）指向 Person
// p1 和 p2 都是 构造函数 Person 的实例。实例的构造函数属性（constructor）指向构造函数。
// https://www.jianshu.com/p/dee9f8b14771