function log(params) {
    console.log(params);
}




// var constru = new Date();
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(Function.prototype);
// console.log(Function.__proto__);
// console.log(Function.prototype.__proto__);

// var num = 666 + 2;
// console.log(num.__proto__);
// console.log(Function.prototype === Function.__proto__);

var foo = function testPrototype() {
    console.log(...arguments);
}
// console.log(foo.__proto__);
// console.log(foo.prototype);
// console.log(foo('ljgl', 666, null));

// var bb = {
//     name: 'jiangfeng',
//     age: 26
// };
// // console.log(bb.prototype);
// var cc = {
// 	name: 'jiangfeng',
// 	age: 26
// };
// log(bb === cc); // true

function test(number) {
    const arr = [2,'10',1,'20'];
    arr.sort( (x,y) => x>y);
    console.log(arr);
}

// test();
function Persion(params) {
    
}
var persion = new Persion();
console.log(Object.prototype===persion.__proto__.__proto__);
