function Person(name) {
    this.name = name;
}

Person.prototype.printName = function () {
    console.log(this.name);
}

var p1 = new Person('pdc');
p1.name = 'hello';
p1.printName();