/**
 * Created by oopsdata1 on 16-3-18.
 */
var compute = function* (a, b) {
    var sum = a + b;
    yield sum;
    var c = a - b;
    yield c;
    var d = a * b;
    yield d;
    var e = a / b;
    return e;
};
var generator = compute(4, 2);
console.log(generator.next()); // { value: 6, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 8, done: false }
console.log(generator.next()); // { value: 2, done: true }