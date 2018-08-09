function Person() { }

Person.prototype = {
    name: 'pdc',
    age: 18,
    job: 'it',
    sayName: function () {
        console.log(this.name);
    }
}

var p1 = new Person();
var p2 = new Person();

p1.sayName();//pdc
p2.sayName();//pdc
console.log(p1.sayName == p2.sayName);//true

console.log(p1.constructor);
console.log(Person.prototype.constructor);


// 在默认情况下，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数（Person）
// 原型对象（Person.prototype）是 构造函数（Person）的一个实例。
// https://www.jianshu.com/p/dee9f8b14771