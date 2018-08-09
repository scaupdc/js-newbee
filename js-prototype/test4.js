function Person() { }

console.log(Person.prototype);//Person{}
console.log(typeof Person.prototype);//object
console.log(typeof Function.prototype);//function
console.log(typeof Object.prototype);//object
console.log(typeof Function.prototype.prototype);//undefined

// 原型对象其实就是普通对象（但 Function.prototype 除外，它是函数对象，但它很特殊，他没有prototype属性（前面说道函数对象都有prototype属性））
// https://www.jianshu.com/p/dee9f8b14771
