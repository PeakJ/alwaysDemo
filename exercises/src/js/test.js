function log(params) {
    console.log(params);
}


window.testJsonp = function(data){
    console.log('调用了');
    console.log(data);
    
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

// var foo = function testPrototype() {
//     console.log(...arguments);
// }
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

// https://www.jianshu.com/u/6d92660a8cea?name=jiangfeng&age=18&sex=male
function test(url,key){
    var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
    var paramStr = url.substr(url.indexOf('?')+1);
    var r = paramStr.match(reg);
    if(r!=null){
        return  unescape(r[2]);
    }
    return null;

}
console.log(test('https://www.jianshu.com/u/6d92660a8cea?name=peakj&age=18&sex=male','name'));