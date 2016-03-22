/**
 * Created by oopsdata1 on 16-3-17.
 */
var fs = require('fs')
var async = require('async')
var co=  require('co')
var thunkify = require('thunkify');


//yield用法
fs.readFile('/home/oopsdata1/project/es6-example/file/1.txt','utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

async.parallel([
        function(callback){
            fs.readFile('/home/oopsdata1/project/es6-example/file/1.txt', 'utf-8',function (err, data) {
                if (err) callback(err);
                callback(null, data);
            });
        },
        function(callback){
            fs.readFile('/home/oopsdata1/project/es6-example/file/2.txt', 'utf-8',function (err, data2) {
                if (err) callback(err);
                callback(null, data2);
            });
        }
    ],
    function(err, results){
       console.log(results);
    });

var test111 = thunkify(fs.readFile);
co.wrap(function *() {
    var test1 = yield test111('/home/oopsdata1/project/es6-example/file/1.txt','utf-8');
    var test2 = yield test111('/home/oopsdata1/project/es6-example/file/2.txt','utf-8');
    var test = test1.toString() + test2.toString();
    console.log(test);
})();


var fn=function(done){
    done(null,{des:"yield result"})
}

var generatorFn=co.wrap(function *(){
    var ret=yield fn
    console.log(ret) // { des: 'yield result' }
})()




//Generator
var compute = function* (a, b) {
    var sum = a + b;
    console.log(sum);
    var c = a - b;
    console.log(c);
    var d = a * b;
    console.log(d);
    var e = a / b;
    console.log(e);
};
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

var generator1 = compute1(4, 2);
generator1.next();
generator1.next();
generator1.next();