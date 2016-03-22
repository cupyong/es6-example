/**
 * Created by oopsdata1 on 16-3-18.
 */
var fs = require('fs')
var compute1 = function* (a, b) {
    var foo = yield a + b;
    console.log(foo);
};
var generator1 = compute1(4, 2);
generator1.next();
generator1.next(); // undefined
//也许读者会以为是a + b的值，但是这里不是：默认情况下，这个foo打印出来是undefined。那么.next()如何影响yield的呢？
// 答案在于可以通过.next()传递参数，赋值给yield关键字前面的变量声明。见下面的简单示例：
var compute = function* (a, b) {
    var foo = yield a + b;
    console.log(foo);
};

var generator = compute(4, 2);
generator.next();
generator.next("Hello world!"); // Hello world!

var flow = function* () {
    var txt = yield fs.readFile('/home/oopsdata1/project/es6-example/file/1.txt', 'utf8');
    var content = yield fs.readFile('/home/oopsdata1/project/es6-example/file/2.txt', 'utf8');
    console.log(content);
};
