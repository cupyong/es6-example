/**
 * Created by oopsdata1 on 16-3-18.
 */
//Generator
//var compute = function* (a, b) {
//    var sum = a + b;
//    console.log(sum);
//    var c = a - b;
//    console.log(c);
//    var d = a * b;
//    console.log(d);
//    var e = a / b;
//    console.log(e);
//};
//var generator = compute(4, 2);
//generator.next();

var compute1 = function* (a, b) {
    var sum = a + b;
    yield console.log(sum);
    var c = a - b;
    yield console.log(c);
    var d = a * b;
    yield console.log(d);
    var e = a / b;
    console.log(e);
};

//var generator1 = compute1(4, 2);
//generator1.next();
//generator1.next();
//generator1.next();



var generator2 = compute1(7, 5);

while(generator2.next()){

}


