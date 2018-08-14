function Person(name) {
    this.name = name;
}

Person.prototype.getName1 = () => this.name;

Person.prototype.getName2 = function () {
    return this.name;
}

const p1 = new Person('pdc');

const n1 = p1.getName1();
console.log(n1);//undefined 在原型上挂载箭头函数无法自动绑定this到对象实例

const n2 = p1.getName2();
console.log(n2);//pdc

console.log(typeof p1);//object
console.log(typeof Person);//function
console.log(p1.constructor.prototype);//Person { getName1: [Function], getName2: [Function] }
console.log(Person.prototype);//Person { getName1: [Function], getName2: [Function] }
console.log(typeof p1.constructor);//function
console.log(p1.constructor);//[Function: Person]

//__proto__总是指向实例对象的构造函数的原型
console.log(p1.__proto__ === p1.constructor.prototype);//true
console.log(p1.__proto__ === Person.prototype);//true