var o1;
var o2 = {};
var o3 = new Object();
var o4 = null;

function f1() { };
var f2 = () => console.log('f2');
var f3 = function () { };
var f4 = new Function('param1', 'param2');

console.log(typeof Object);//function
console.log(typeof Function);//function

console.log(typeof o1);//undefined
console.log(typeof o2);//object
console.log(typeof o3);//object
console.log(typeof o4);//object

console.log(typeof f1);//function
console.log(typeof f2);//function
console.log(typeof f3);//function
console.log(typeof f4);//function



// 凡是通过 new Function() 创建的对象都是函数对象，其他的都是普通对象。f1,f2,归根结底都是通过 new Function()的方式进行创建的。Function Object 也都是通过 New Function()创建的。
// https://www.jianshu.com/p/dee9f8b14771
// undefined和null有本质的区别，undefined代表未定义，与object，function是同级的，但null却是object，或者说是特殊的一种object