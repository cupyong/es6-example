/**
 * Created by oopsdata1 on 16-3-17.
 */
var fs = require('fs')
// var async = require('async')
var co = require('co')
var thunkify = require('thunkify');


// this.a=1;
// function test(){
//     var1 = 2;
//
// }
// test();
// console.log(var1);
//
//
// function test(){
//     var var1 = 2;
//
// }
// test();
// console.log(var1);


// var test={
//     a:"test",
//     msg:function(){
//         a="1234";
//         console.log(this.a);
//         var msg1= function(){
//             console.log(this.a);
//         }
//         msg1();
//     }
// }
// test.msg();

// function test1()
// {
//     this.var01 = "test";
// }

// function test2()
// {
//     console.log(var01);
// }

// var a= new test1();
// test1();
// test2();
// console.log(a.var01);



// (function(obj){
//
//     var a=1
//     this.a=2;
//
//     console.log(a)
// })(this)


// //yield用法
// fs.readFile('/home/oopsdata1/project/es6-example/file/1.txt','utf-8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });
//
// async.parallel([
//         function(callback){
//             fs.readFile('/home/oopsdata1/project/es6-example/file/1.txt', 'utf-8',function (err, data) {
//                 if (err) callback(err);
//                 callback(null, data);
//             });
//         },
//         function(callback){
//             fs.readFile('/home/oopsdata1/project/es6-example/file/2.txt', 'utf-8',function (err, data2) {
//                 if (err) callback(err);
//                 callback(null, data2);
//             });
//         }
//     ],
//     function(err, results){
//        console.log(results);
//     });
//
// var test111 = thunkify(fs.readFile);
// console.log(__dirname)
// co.wrap(function *() {
//     var test1 = yield test111('/Users/zengzhiyong/work/githubproject/es6-example/file/1.txt','utf-8');
//     var test2 = yield test111('/Users/zengzhiyong/work/githubproject/es6-example/file/2.txt','utf-8');
//     var test = test1.toString() + test2.toString();
//     console.log(test);
// })();

var test111 = thunkify(fs.readFile);
var aaaa=test111('/Users/zengzhiyong/work/githubproject/es6-example/file/1.txt', 'utf-8')
function compose(middleware){
  return function *(next){
    if (!next) next = aaaa;

    var i = middleware.length;
    var obj = this;
    while (i--) {
      console.log(this===obj)
      next = middleware[i].call(this, next);
    }
    return yield *next;
  }
}

var a=function *(a){
  console.log('>> one');
  yield a;
  console.log('<< one');
}
var b=function *(b){
  console.log('>> two');
  yield b;
  console.log('<< two');
}
var c=function *(c){
  console.log('>> three');
  yield c;
  console.log('<< three');
}
var mmm=compose([a,b,c])
co.wrap(mmm)()


// console.log(__dirname)
// co.wrap(function* (next) {
//   var aaa= yield next ;
//   console.log(aaa);

//    var a = function (aaa) {
//             console.log(1)
//             return aaa;
           
//    }
//    var m = a(next);
//    console.log(m)
// })(test111('/Users/zengzhiyong/work/githubproject/es6-example/file/1.txt', 'utf-8'));

//
//
// var fn=function(done){
//     done(null,{des:"yield result"})
// }
//
// var generatorFn=co.wrap(function *(){
//     var ret=yield fn
//     console.log(ret) // { des: 'yield result' }
// })()
//
//
//
//
// //Generator
// var compute = function* (a, b) {
//     var sum = a + b;
//     console.log(sum);
//     var c = a - b;
//     console.log(c);
//     var d = a * b;
//     console.log(d);
//     var e = a / b;
//     console.log(e);
// };
// //var generator = compute(4, 2);
// //generator.next();
//
// var compute1 = function* (a, b) {
//     var sum = a + b;
//     yield console.log(sum);
//     var c = a - b;
//     yield console.log(c);
//     var d = a * b;
//     yield console.log(d);
//     var e = a / b;
//     console.log(e);
// };
//
// var generator1 = compute1(4, 2);
// generator1.next();
// generator1.next();
// generator1.next();



// function Class10()  
// {  
//     this.showSub = function(a,b)  
//     {  
//         console.log(a-b);  
//     }  
// }  
  
// function Class11()  
// {  
//     this.showAdd = function(a,b)  
//     {  
//         console.log(a+b);  
//     }  
// }  
  
// function Class2()  
// {  
  
//    this.showAdd = function(a,b)  
//     {  
//         console.log("1111");  
//     } 
//     Class10.call(this);  
//     Class11.call(this);  
// }  

// var mmm= new Class2();
// mmm.showAdd(1,2)


function Class(name){
    
    this.name = 'Class';
    console.log(this.name)
    this.getName = function(){

        console.log( this.name );

    }

}

function ClassA(name){
   // console.log(2)
     this.name = 'ClassA';
     console.log(this.name)
}

Class.call();  

var obj = new Class("1111");

