// import { getBearing } from "geolib";

// import { resolve } from "path";

// import { resolve } from "url";

// // const s = "Hello world.......";
// // console.log(s);

// // var name;

// // name = 'vimal';

// // console.log(name);

// // // function add (num1, num2, cb){

// // // let result = num1*num2;

// // // cb(result);

// // // console.log(result);

// // // }

// // // function sub (data, cb1) {
// // //      console.log (`the result is ${data}`);
// // //      cb1(data);

// // // }

// // // function mul (data1) {
// // //     console.log (`${data1}`);

// // // }

// // // sub(2000, mul);

// // // add (10, 20, sub);

// // function add (number, cb){
// // console.log (number);
// // cb(100);
// // }

// // function sub (data){
// //     console.log ("sub" + data);
// //     // cb1(15);
// // }

// // function mul (data1){

// //     console.log ("mul" + data1);
// //     // cb2(10000);
// // }

// // function div (data2){

// //     console.log ("div"  + data2);

// // }

// // div (2000);

// // mul (12, div);

// // sub (10, mul);

// // add (5, sub);

// // keepsHisWord = true;
// // promise3 = new Promise(function(resolve, reject) {
// //   if (keepsHisWord) {
// //     resolve("The man likes to keep his word");
// //   } else {
// //     reject("The man doesn't want to keep his word");
// //   }
// // });
// // console.log(promise3);

// // var momsPromise = new Promise( (resolve, reject) => {
// //     momsSavings = 20000;
// //     priceOfPhone = 60000;
// //     if (momsSavings > priceOfPhone) {
// //       resolve({
// //         brand: "iphone",
// //         model: "6s"
// //       });
// //     } else {
// //       reject({
// //         Reason: "We donot have enough savings",
// //         SoWhatNext: "Let us save some more money."
// //       }
// //          );
// //     }
// //   });
// //   momsPromise.then(function(value) {
// //     console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
// //   });
// //   momsPromise.catch(function(data) {
// //     console.log("Mom coudn't buy me the phone ", JSON.stringify(data));
// //   });
// //   momsPromise.finally(function() {
// //     console.log(
// //       "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
// //     );
// //   });

// // let word1 = "vimal";

// // let word2 = "Kumar";

// // const Fullname = `${word1} ${word2}`;

// // console.log(Fullname);

// // const personalInformation =
// // {

// // fname: "vimal",
// // lname: "kumar",
// // location: "Bangalore",
// // ctc: "11000"

// // }

// // const {fname, lname} = personalInformation

// // console.log(personalInformation.location);

// // var numbers = function (num1, num2){

// //     num = num1 * num2;

// //     console.log (num);

// // }

// // numbers(5,6);

// // function address (city,state){

// //    const newaddress = {city, state};

// //     console.log(newaddress);

// // }

// // address ("Bangalore","Karnataka");

// // const digits = [2,4,6,8];
// // let total = 0;

// // for (let digit of digits){
// //   console.log(digit);
// //   total += digit;

// // }

// // console.log (total);

// // let example1 = [1,2,3,4,5,6];
// // let example2 = [5,6,7,8, ...example1, "vimal"];
// // let example3 = [...example2, ...example1];

// // console.log(example3);

// let numbers = function (a, b, ...other) {

//   let result = a + b;

//   console.log(other);

//   console.log(other[1]);

//   console.log(result);
// }

// numbers(1, 2, 3, 4);

// // var total = 0;

// // for (i = 1; i <= 100; i++) {

// //   total = total + i;

// // }

// // console.log(`total is ${total}`);

// var fruits = ["mango", "banana", "apple"];

// let newfruit = [];
// let some = (fruits) => {
//   for (i = 0; i < fruits.length; i++) {
//     console.log(`${fruits[i]}`);
//     newfruit.push(fruits[i]);
//   }
// }

// some(fruits);
// console.log(newfruit);

// // var objects = [
// //   {

// //     name: "Vimal",
// //     age: 29,
// //   },
// //   {

// //     name : "Shruthi",
// //     age: 25,
// //   },
// //   {
// //     name : "Nikil",
// //     age: 29,
// //   }
// // ];

// // objects.forEach( () => {
// //   for (i=0; i<objects.length; i++){

// //     console.log (objects[i].name);
// //   }
// // });

// var objects =
// {

//   name: "Rajesh",
//   age: 31
// }

// for (var e in objects) {

//   console.log(e, objects[e]);
// }

// console.log(objects.name);

// function Cat(name, age) {

//   this.name = name;
//   this.age = age;

// }

// var cat1 = new Cat('vimal', 29);
// var cat2 = new Cat('rajesh', 31);
// var cat3 = new Cat('Shruthi');

// console.log(`HEllO ${cat3.name}`);
// console.log("Hello");
// console.log(cat1, cat2, cat3);
// console.log(cat2);

// class Dog {

//   constructor(name, age) {
//     this.age = age;
//     this.name = name;
//   }

//   speak() {

//     console.log("HElllll" + this.age + this.name);
//   }

// }

// let dog1 = new Dog('goffy', 2);

// console.log(dog1);
// dog1.speak()

// var monkey = [{

//   name: "Yeti",
//   age: 10
// },

// {

//   name: "teti",
//   age: 15
// }]

// // monkey.name = 'yoti';

// // console.log(monkey.name);

// //  monkey['height'] = 10;

// //  console.log(monkey['height']);

// // console.log(Object.getOwnPropertyDescriptor(monkey, 'age'));

// // // //{ value: 10,
// // // writable: true,
// // // enumerable: true,
// // // configurable: true }
// // console.log ("new line");

// // for (let e in monkey) {

// //   console.log (monkey, monkey[0]);
// // }

// // let z = Array.isArray(yeah);
// // if (z === true) { (console.log(z)); }
// // else {
// //   console.log("false");
// // }

// // function func() {
// //   document.write(Array.isArray(['Day','Night','Evening']));
// // }

// // func();
// let yeah = [10, 20, [3, 4, [5, 6]], 7, 8];

// let yeah1 = [];

// for (i=0; i < yeah.length; i++ ){
//   yeah1.push(yeah[i]);
//   // for (j=0; j< yeah[j].length; j++)
//   // yeah1.push(yeah[j]);
//   console.log ("yo");
//   console.log (yeah1);
// }

// // function bike (){

// //   console.log (this.color);
// //   console.log (this.name);

// // }

// // var object1 = {
// //   bike1: bike, name: "duke", color : "black"
// // };

// // object1.bike1();

// // function bikes (name, color){
// //   this.something = color;
// //   this.else = name;
// //   console.log (`${color}, ${name}`);
// // }

// // bikes ("harley", "red");

// // let array1 = [1,2,3,4];

// // let array2 = [0,0,0, [...array1]];

// // console.log (array2);

// function formatName(firstName,lastName) {
//   // return this.firstName + ' ' + this.lastName;
//  this.firstName = firstName
//  console.log(firstName);
// }

// // const user = {
// //   firstName: 'Harper',
// //   lastName: 'Perez'
// // };

// formatName("Harper", "Perez");

// let name = {

//   firstName : "Vimal",
//   age: "29",

//   fullName: function (data1, data2){

//     console.log(`${this.firstName} ${this.age} ${data1} ${data2}`);
//   }

// }

// name.fullName.call(name, "VimalKumar", "RajeshKumar");

// let a = function(){
//   let str = "hey there aaa bbb dddd aaaa"
//   let strsplit = str.split (" ");
//   let sorted =  strsplit.sort();

//   return sorted;

// }

// a();

// function data () {

//   console.log(a());
// }

// data();

// const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];

// // helper function
// function alphabetize(word) {
//     // if (!word) {
//     //     return;
//     // }
//     word = word.split('');
//     word = word.sort();
//     word = word.join('');
//     return word;

// }

// // main function
// function anagramGrouper(words){
//     const anagrams = {};
//     words.forEach((word)=>{
//         const sortedWord = alphabetize(word);
//         if (anagrams[sortedWord]) {
//             return anagrams[sortedWord].push(word);
//         }
//         anagrams[sortedWord] = [word];
//      });
//     return anagrams;
// }

// // store the result (anagrams object) in a variable called groupedAnagrams
// const groupedAnagrams = anagramGrouper(words);

// // iterate over groupedAnagrams, printing out each key:value pair on an individual line
// for(const sortedWord in groupedAnagrams){
//     console.log(groupedAnagrams[sortedWord].toString());
// }

// Problem 0

// const myfact = 5;

// function factorial (num){

//   var total = 1;

//   for (i=0; i<num; i++){

//     total = total*(num-i);

//   }

//   return total;

// }

// console.log(factorial(myfact));

// function findLongestWordLength(str) {

//   var arr = str.split(" ");

//   console.log (arr);

//   var newarr = [];

//   for (i=0;i<arr.length; i++){

//     newarr = newarr.push(arr[i]);

//   }

//     return str.length;

//   }

//   findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Problem 1 get initials

// function getInitials (names) {

// var spl = names.split(" ");

// var initials = [];

// for (var i=0; i<spl.length; i++){

//     var x = (spl[i][0]);

//     initials.push(x);

// }

// return initials.join("");

// }

// console.log(getInitials("john f kennedy"));

// Problem 2 get a multiplied array from the existing array

// const arr = [10, 10, 50, 20, 33, 67, 55];

// let multi = function (ar) {

// let newarr = [];

// for (i=0; i<arr.length ;i++){

//     // newarr.push(arr[i]*n);

//     newarr = [...new Set(arr)];

//     x= newarr.sort().reverse();

//     // console.log(arr[i]);

// }
// return x;
// }

// console.log(multi (arr));

// #Problem 3

// function largestOfFour(arr) {

//   newarr = [];

//   for (i=0; i<arr.length; i++){

//     newarr.push(Math.max(...arr[i]));
//     }

//    return newarr;
//  }

//  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//confirmEnding("Open sesame", "game") should return false.

// #Problem 4

// function confirmEnding(str, target) {
//   arr = str.split(" ");
//   tar = target.split(" ");

//   arr1 = arr[arr.length-1];
//   tar1 = tar[tar.length-1];

//   var x = tar1.length
//   var y = arr1.length

//   console.log(arr1);
//   console.log(tar1);
//   console.log(x);
//   console.log(y);
//   console.log(arr1.slice(y-x));
//   // console.log(arr1[arr1.length-1])
//   // for (var i=0; i<arr.length; i++){

//   if (arr1.slice(y-x) == tar1){
//     return true;
//   }

//   else return false;

// }

//   console.log(confirmEnding("Open sesame", "same"));

// problem# 5

// var places = ['tokyo', 'brazil', 'bali'];
// var places1 = ['tokyo', 'swiss', 'Dubai'];

// function destination (arr1, arr2){

//   for (i=0; i < arr1.length; i++){

//     for (j=0; j<arr2.length; j++){

//       if (arr1[i] == arr2[j]){
//         return arr1[i];
//       }
//     }

//   }

// }

// console.log(destination(places,places1));

// problem # 6

// var x = [1,7,5,4,5,6,7,8,9,3];
// var n = 12;

// var y = [... new Set(x)]

// var z1 = y.sort();

// console.log(z1);

// // var y = [...x.slice(0, (x.length)/2)];
// // var z = [...x.slice((x.length)/2, x.length)];

// // var y1 = y.sort();
// // var z1 = z.sort();

// // console.log(y1);
// // console.log(z1);

// function summer (arg1, arg2){

//   for (i=0; i<arg1.length/2; i++){

//       for (j=arg1.length-1; j>0; j--){

//         if(x[i]+x[j] == arg2)
//         {

//           console.log(x[i], x[j]);

//         }

//       }

//   }

// }

// console.log(summer(x, n));

// #problem 7

// Plalindrom checker

// const palin = "abcfcba"

// function pal (arr){

//   var x= arr.split(/(?!$)/);
//   console.log(x);

//   const right = [...x].splice(0,arr.length/2);

//   const y= right.sort().join("");

//   console.log(y);

//   const left = [...x].splice(arr.length/2, arr.length);

//   const z= left.sort().join("");

//   console.log(z);

//   if(y === z){

//     console.log("its a palindrom");
//   }

//   else {
//     console.log("not!");
//   }

// }

// pal(palin);

// anagrams in an array and push it to new array

// const anagram = ['rat', 'cat', 'bat', 'tar', 'tac'];

// var promise = new Promise(function(resolve, reject) {

//   for (i=0; i<anagram.length; i++){

//     try{

//     resolve (console.log(anagram.split(" ").sort()));

//     }

//     catch(e){
//       reject(e);
//     }

//   }

// });

//  promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occured');
//     });

// let data = ['DELHI','NEWYORK','delhi','GOA','MUMBAI','CALIFORNIA','GOA']

// let removeDuplicateUsingFilter =  (arr)=>{
//   let unique_array = arr.filter((elem, index, self) => {
//        return index == self.indexOf(elem.toUpperCase())
//   });
//   return unique_array}

// es 6 destructing and this;

// console.log(removeDuplicateUsingFilter(data));

// this.middlename = 'R'
// const student = {

//   firstname: 'Glad',
//   lastname: 'Chinda',
//   fullname:  () => {
//     return (`${this.middlename} ${lastname}`);

//   }
// };

// const {firstname, lastname, fullname} = student;
// console.log(fullname());

// const student = [{
//   firstname: 'Glad',
//   lastname: 'Chinda',
//   country: 'Nigeria'
// }, {
// lastname: 'kumar',
// country: 'india'} ];

// console.log(student);

// function listNames(data) {
//   let student_names = [];
//   for (let i=0; i<data.length; i+=1) {
//    student_names.push(data[i].firstname);
//   }
//   return student_names;
// }
// console.log(listNames(student));

// const filter1 = student.filter(data => data.firstname);

// const map1 = filter1.map(data => data.firstname);

// console.log(map1);

// let sums = new Promise ((res, rej)=>{
//   let x = 10;

//   if (x > 2){
//     res(x);
//   }
//   else
//   rej(`error found`);

// })

// sums
//   .then((ex) => {
//     console.log(ex)
//     return (ex*2)
//   })
//   .then((ex1) => {
//     console.log(ex1)
//   })
//   .catch((err) => console.log(`${err}`))

// console.log(sums);

// Promises

// let prom1 = new Promise ((resolve, reject)=> {

//   let x = (data) =>{
//     return data*data;
//   }

//   let y = x(100);

//   if (y>0){

//     resolve(x(11));

//   } else
//    reject('goodbye');
// })

// prom1.then((data) =>{
//   console.log(data);
// }).catch ((err) => {console.log(`${err} error`)} );

// let prom2 = Promise.resolve('hello moto');

// // prom2.then((result)=> {console.log(`P2: ${result}`)})

// let prom3 = ()=> {
//   Promise.resolve('Yeah 3').then((result)=>{console.log(`${result} yeah 3`)})
// }

// prom2.then((result)=>{console.log(`${result}`)})

// prom3().then((result1)=>{console.log(`${result1}`)});

// let prom4 = () =>{
//   Promise.reject ('Hell no');
// }

// prom4().then((result1)=>{console.log(`${result1}`)}).catch((err)=> {`${err}`})

// Promise.all([prom1, prom2]).then ((results)=> {console.log(`${results[0]}`)
// console.log(`${results[1]}`)
// });

// IIFE

// var a = 2;

// (function (){
//   console.log(a);
//   var a = 3
//   // console.log(a);
// })();

// console.log(a + " last");

//Delete keyword

// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// delete person.firstName;
// console.log (person);
// or delete person["age"];

// type conversion

// var x = true;

// console.log ( "xyz" + x); // xyz

// console.log (x + 1); // 1

// console.log (false + x); // true

// console.log(true + x); // true

// generators

// function * generatorFunction() { // Line 1
//   console.log('This will be executed first.');
//   yield 'Hello, ';   // Line 2
//   console.log('I will be printed after the pause');
//   yield 'World!';
// }
// const generatorObject = generatorFunction(); // Line 3
// console.log(generatorObject.next().value); // Line 4
// console.log(generatorObject.next().value); // Line 5
// console.log(generatorObject.next().value); // Line 6

// function tree (n){

// // for (var i = 0; i <= n; i++)
//   var result = "";
//   for (var i = 0; i < n; i++) {
//      result += "*";
//      console.log(result);
//   }

// }
// tree(3);

// function tree (n){

//   // for (var i = 0; i <= n; i++)
//     var sum = 0;
//     for (var i = 1; i < n; i++) {
//        sum = sum + i;
//       //  console.log(sum);
//     }
//     console.log(sum);

//   }
//   tree(5);

// var fb = function (n) {

//   // for (var i=1; i<=n; i++){
//   //   if(((i%5) === 0 ) && ((i%3) === 0)){
//   //     console.log("fizzbuzz");
//   //     break;
//   //     }
//   //   if ((i%3) === 0){
//   //   console.log("fizz");
//   //   }
//   //   if((i%5) === 0){
//   //     console.log("buzz");
//   //     }

//   //   else{
//   //       console.log(i);
//   //     }
//   // }

//   switch (n){
//     case 1:
//     fb(n);
//     break;
//     case 2:
//     console.log ("two");
//     break;
//     default:
//     console.log ('something else');
//   }

// }

// fb(1);

// function loops (n) {

//   let emp = 1;
//   while (emp <=n) {
//     console.log(emp);
//     emp++
//   }

// }

// loops(20);

// function loopa (m) {
//   for (i = m; i > 0; i--){
//     console.log (i);
//   }
// }

// loopa(10);

// function stars (p) {

//      var z = "";

//      var i = 0;

//      while (i<p) {

//       z = z + "*"

//       i++;

//       console.log (z);

//      }

//   // for (i = 0; i<p; i++){

//   //    z = z + "*"
//   //    console.log (z);

//   // }
// }

// stars(130);

// var chess = function(n) {

//   var m = "";
//   var l = "#";

//   for (i = 0; i<= n ; i++){

//     if (i % 2 == 0)
//     {

//       m = m + " #"
//       console.log (m);
//     }
//     else {

//       l = l + " #"
//       console.log (l);
//     }

//   }

//   for (j = 5; j> 0 ; j--){

//     if (j % 2 == 0)
//     {

//       m = m + " #"
//       console.log (m);
//     }
//     else {

//       l = l + " #"
//       console.log (l);
//     }

//   }

// }

// chess (8);

// var chess1 = function(m, n) {
//   for (k = 0; k < m / 2; k++) {
//     var chess = function(n) {
//       var x = "";
//       var y = "#";

//       for (i = 0; i < n; i++) {
//         x = x + " #";
//       }

//       for (j = 1; j < n; j++) {
//         y = y + " #";
//       }

//       console.log(x);
//       console.log(y);
//     };

//     chess(n);
//   }
// };
// chess1(8, 4);

// function vimal (n){
//      return vimal (n-1) * n;
// }

// console.log(vimal (3));

// function factorial(n) {

//     return factorial(n - 1) * n

// }

// console.log(factorial(8))

// function sum1(n) {
//   if (n == 0) {
//   return 1;
//   } else {
//   return sum1(n-1)* n;
//   }
// }

// var x = sum1(100);
// var y = console.log (x-1);

// function sum (n){
//   var total = 1;
//   for (i=1; i<=n; i++){

//     total = total * i

//   }

//   console.log (total);

// }
// sum (100);

//  closures

// function numbers (a , b){

//   var x = "the result is ";

//   function add (){
//     var z =  a + b;
//     return x+z;
//   }

//   return add();
// }

// console.log (numbers (10, 20));

// lexical scoping: variables defined in one function is not defined in another function

// function numbers (a , b){

//   var x = "the result is ";

//   return add();
// }

// function add (){
//   var z =  a + b;
//   return x+z;
// }

// console.log (numbers (10, 20));

// function summer (m){

// var total = 0;

// for (i = 0; i <= m; i++ ){

//   total = total + i;
//   console.log (total);
// }

// }

// summer (10);

// const obj = {

//   a: 1,
//   b: 2,
//   getA(){
//   console.log(this.a);
//   return this;
//   },

//   getB(){
//   console.log(this.b);
//   }

//   // getC(){
//   //   console.log(this.a);
//   // }

//   }

//   console.log(obj.getA().getB());

// const a = function (x){
//   return this.setTimeout(() => {
//     console.log ("Vimal");
//   }, 1000);
// }

// console.log(a());

// var a = 'Hello World!';
// console.log(a);
// a = undefined;
// if(a===undefined)  {
//    console.log('a is not defined!');
// } else  {
//    console.log('a is defined!');
// }

// chaining methods

// class User {
//   constructor(email, name){
//       this.email = email;
//       this.name = name;
//       this.score = 0;
//   }
//   login(){
//       console.log(this.email, 'just logged in');
//       console.log(this);
//       this.email = 'rajesh@gmail.com';
//       return this;
//   }
//   logout(){
//       console.log(this.email, 'just logged out');
//       return this;
//   }
//   updateScore(){
//       this.score++;
//       console.log(this.email, 'score is now', this.score);
//       return this;
//   }
// }

// const user1 = new User ('vimal@gmail.com', 'kumar');

// user1.login().logout();
// console.log(user1.email);

// destructering

// const person = {
//   name : 'John Doe',
//   country: 'Canada',

//   fullname: function (){
//     console.log(this);
//     console.log(`${person.name} ${this.country}`);
//   }
// };

// // Assign default value of 25 to age if undefined
// // const { name, country, age = 25 } = person;

//  let age = 10;

// person.fullname();

// Here I am using ES6 template literals
// console.log(`I am ${name} from ${country} and I am ${age} years old.`);

// call, apply , bind

// function identify() {
// 	return this.name.toUpperCase();
// }

// function speak() {
// 	var greeting = "Hello, I'm " + identify.call( this );
// 	console.log( greeting );
// }

// var me = {
// 	name: "Kyle"
// };

// var you = {
// 	name: "Reader"
// };

// var binder = identify.bind(me); // KYLE
// console.log(identify.call( you)); // READER

// console.log(binder());

// speak.call( me ); // Hello, I'm KYLE
// speak.call( you ); // Hello, I'm READER

// var count = 0;

// function indentity (num){

//   console.log (`${this.name} ${this.age} ${num}`);

// }

// var obj = {}

// obj.name = "vimal";
// obj.age = 29;

// // var obj = {

// //   name : "vimal",
// //   age : 29,

// // }

// for (var i =0; i<10 ; i++){

//   indentity.call(obj, i);
// }

// function foo(num) {
// 	console.log( "foo: " + num );

//   // keep track of how many times `foo` is called

//    console.log (obj.counts);
//   return obj.counts++;

// }

// var obj = {

//   counts : 0
// }

// // foo.counts = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		foo( i );
//   }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9

// // how many times was `foo` called?
// // console.log( foo.count );
// console.log( foo.call(obj) );

// function foo(something) {
// 	console.log( this.a, something );
// 	return this.a + something;
// }

// var obj = {
// 	a: 2
// };

// var bar = function() {
// 	return foo.apply( obj, arguments );
// };

// var b = bar( 3 ); // 2 3
// console.log( b ); // 5

// function foo() {
// 	console.log( this.a );
// }

// var a = 2;

// foo(); // 2

// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// obj.foo(); // 2

// function foo() {
// 	console.log( this.a );
// }

// var a = 2;

// foo();

// function foo(){

//   function hell1 (){
//    console.log("Hello world 1");
//    return this
//   }

//   function hell2 (){
//     console.log("Hello world 2");

//    }

// }

// foo().hell1().hell2();

// method chaining of objects

// const obj = {

// a : 1,
// b: 3,

// getA(){
//   console.log(this.a);
//   return this;
// },

// getB(){
//   console.log ("hello world2");
// }

// };

// obj.getA().getB();

// function foo() {

// 	console.log( this.a );
// }

// var a = 2;

// foo();

// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// obj.foo();

// function foo() {
// 	console.log( this.a );
// }

// var obj2 = {
// 	a: 42,
// 	foo: foo
// };

// var obj1 = {
// 	a: 2,
// 	obj2: obj2
// };

// obj1.obj2.foo();

// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// // obj.foo();

// var bar = obj.foo; // function reference/alias!

// var a = "oops, global"; // `a` also property on global object

// bar(); // "oops, global"

// function foo() {
// 	console.log( this.a );
// }

// function doFoo(fn) {
// 	// `fn` is just another reference to `foo`

// 	fn(); // <-- call-site!
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "oops, global"; // `a` also property on global object

// doFoo( obj.foo ); // "oops, global"

// function foo() {
// 	console.log( this.a );
// }

// var obj1 = {
// 	a: 2,
// 	foo: foo
// };

// var obj2 = {
// 	a: 3,
// 	foo: foo
// };

// obj1.foo(); // 2
// obj2.foo(); // 3

// obj1.foo.call( obj1 ); // 3
// obj2.foo.call( obj2 ); // 2

// function foo() {
// 	console.log( this.a );
// }

// function doFoo(fn) {
// 	// `fn` is just another reference to `foo`

// 	fn(); // <-- call-site!
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "oops, global"; // `a` also property on global object

// doFoo( obj.foo );

// console.log(x_obj.y_obj.method() === x_obj.y_obj)

// function fx () {
//   return this;
// }

// var obj = {
//   method: function () {
//       return this;
//   }
// };

// var x_obj = {
//   y_obj: {
//       method: function () {
//           return this;
//       },
//       method2: function () {
//         return this;
//     }

//   }
// };

// var shop = {
//   fruit: "Apple",
//   sellMe: function() {
//     return this.fruit;
//    // console.log("this ", this.fruit);
// // => this Apple
//     console.log("shop ", shop.fruit);
// // => shop Apple
//   }
// }

// console.log (shop.sellMe());

// var Foo = function () {
//   return this;
// };

// var a = 10;

// var Foo = function () {
//   return this.a;
// };

// Closure rule #1

// function celebrityName (firstName) {
//   var nameIntro = "This celebrity is ";
//   // this inner function has access to the outer function's variables, including the parameter
//  function lastName (theLastName) {
//       return nameIntro + firstName + " " + theLastName;
//   }
//   return lastName;
// }

// var x = celebrityName("micheal");

// console.log(x("jackson"));

// Closure rule #2

// let obj1 = { a: 0 , b: { c: 0}};
// let obj3 = JSON.parse(JSON.stringify(obj1));
// console.log(obj1);
// obj1.a = 4;
// console.log(obj1);
// obj1.b.c = 4;
// console.log(obj1);
// console.log(obj3);
// console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}

// function reverseString (str) {

// const st = str.split(" ").reverse().join(" ");

// console.log(st);

// }

// reverseString("vimal Kumar");

// function reverseString (str) {

//     let newStr = '';

//     for (var i=0; i<=str.length-1; i++){
//       newStr = str[i] + newStr ;
//       console.log (newStr);
//     }
//     console.log (newStr);

// }

// reverseString("vimal");

// function reverseString (str) {

//     let newStr = '';

//     for (let x of str){
//       newStr = x + newStr ;
//       console.log (newStr);
//     }
//     console.log (newStr);
//     console.log (newStr.split(''));

// }

// reverseString([1,2,3]);

// function reverseString (str) {

//     return str.split('').reduce(function (revString, char) {

//           return char + revString;
//     }, '');
// }

// console.log(reverseString("vimal"));

// let str = 'Turn the page';

// for (let index in str) {
//   console.log(`Index of ${str[index]}: ${index}`);
// }

// function cap(str) {

//     const arr = str.split(" ");

//     for(let i = 0; i<=arr.length-1; i++){
//          arr[i] = (arr[i][0].toUpperCase()+arr[i].slice(1));

//     }
//     let finalStr=arr.join(" ")

//     console.log (finalStr);

// }

// cap("i love javascript");

// function cap (str){

//     const str1 = str.split(' ');

//     for (i = 0; i< str1.length; i++ ){

//         str1[i] = str1[i][0].toUpperCase() + str1[i].substring(1);

//     }

//     return str1.join(" ");

// }

// console.log(cap("I love javascript"));

// function mapper (arr) {

// const newer = arr.filter((ar) => {  return (ar !== 6) }

// );

// return newer

// }

// console.log (mapper ([1,2,3,4,5,6, 6]));

// const data = [
//   {
//     country: "China",
//     population: 1409
//   },
//   {
//     country: "India",
//     population: 1339
//   },
//   {
//     country: "USA",
//     population: 324
//   },
//   {
//     country: "Indonesia",
//     population: 263
//   }
// ];

// function something () {

//     const fil = data.filter((da) => {
//       return da.population > 1000
//     });

//     console.log (fil);

// }

// something (data);

// Filter trick

// function searcher (data, subb) {

//     let ser = data.filter ((item) => {

//         return item.indexOf(subb) > -1
//     })

//     return ser;

// }

// console.log(searcher (["vimal", "kumar"], "xx"));

// function fil (arr) {

//     const x = arr.filter((elm, i) => { return arr.indexOf(elm) === i })
//     return x;
//     }

//     console.log(fil(['John', 'Paul', 'George', 'Ringo', 'John']));

// const countries = [
//     { name: 'Nigeria', continent: 'Africa'},
//     { name: 'Nepal', continent: 'Asia'},
//     { name: 'Angola', continent: 'Africa'},
//     { name: 'Greece', continent: 'Europe'},
//     { name: 'Kenya', continent: 'Africa'},
//     { name: 'Greece', continent: 'Europe'}
// ]

// function cont (str) {

//     const x = countries.filter((data) => {
//        return data.continent === 'Africa'
//     }).map((elem) =>  {return elem.name})
//     console.log (x);
// }

// cont (countries);

// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// let x = (names) => names.filter((v,i) => console.log(`${v} , ${i} ${names.indexOf(v) === i}`));
// console.log(x(names));

// const x = [{name : "vimal", age : {age1 : 26, age2 : 28}}]

// x.map ((y) => Object.freeze(y));

// x[0].age.age1 = 30;
// x[0].name = "kumar";

// console.log (x);

// const y = x.slice(3, 9);
// console.log(y);

// let total = 0;

// for (i =0; i<x.length; i++){

//     total = total + x[i];

// }

// console.log (total);

// const z = []

// x.forEach(element => {
//     return z.push(element/2);
// });

// const y = z.map ((elem)=>  Math.floor(elem));

// console.log(z);
// console.log(y);

// const x = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10];

// const y = [...new Set(x)];

// console.log (y);

// const z = x.filter((elem, i)=> {
//     return x.indexOf(elem) === i
// });

// console.log(z);

// const x = function rev (str){
// return str.split('').reverse().join('');
// }

// console.log (x('vimal'));

// const x = function (str) {

//     const y = str.split('');
//     console.log (y);
//     const z =[];

//     y.forEach((item)=>{return z.unshift(item) });
//     const m = z.join('');
//     return m;
// }

// console.log (x('vimal'));

// const pal = (str) => {
//     const x = str.split('').reverse().join('').toLowerCase();
//     if (x === str.toLowerCase()){
//         console.log ('its a palindrom')
//     }
//     else console.log(1);
// }

// pal('VimIv');

// const inte = (ino) => {
//     const m = parseInt(ino.toString().split('').reverse().join(''));
//     // const n = parseInt(m)* Math.abs(ino);
//     console.log (m);
// }

// inte(001);

// const cap = (str)=> {
//     const x = str.toLowerCase().split(" ");
//     const y = x.map((item)=> {
//            return item.split('').splice(0, item.length-1).join('') + item[item.length-1].toUpperCase();
//     })
//     const z = y.join(" ");
//     console.log(z);
// }

// cap ('vimal kumar swamy');

// const rem = (str) => {

//     const x = str.filter((v, i) => {

//        return  str.indexOf(v) === i
//         // console.log (str.indexOf(v));
//         console.log(i);
//         // return 1
//     }

//     );

//     return x;

// }

// console.log(rem ([1, 10, 10, 11, 12, 15]));

// const maxx = (str) => {

// const x = str.split('');

// const y = x.filter((v, i)=> {
//     return str.indexOf(v) !== i;
// })

// }

// console.log (maxx('javaaaaascccript'));

// function maxChar (str) {

//     const charMap = {}

//     str.split('').forEach(char => {

//         if (charMap[char]){
//             charMap[char]++;
//         }
//         else {charMap[char] = 1}

//     });

//     return charMap;

// }

// console.log(maxChar('javascripttttt'));

// function pairs(arr) {
//   const x = arr.map(elem => {
//     return elem
//       .split("")
//       .sort()
//       .join("");
//   });

//   return x;
// }

// const y = pairs(["mat", "tam", "atm", "pam", "pam", "tom"]);

// function maxChar(arr) {
//   const charMap = {};

//   arr.map(char => {
//     if (charMap[char]) {
//       return charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });

//   return charMap;
// }

// console.log(maxChar(y));

// const x = [[1,2], [3,4], [5,6], [7]];

// function flat (arr) {

//     const y = []

//     arr.forEach(element => {
//         y.push(...element)
//     });

//     return y

// }

// console.log(flat(x));

// const x = [1, 2, 3, 4, 5, 6, 8, 9];

// function seq (arr) {


//   const y =  arr.filter ((v, i)=> {
//      if (i+1 !== v) {
//          return v
//      }
//   })

//   const z = console.log (`${y[0] - 1} is the missing number`);
  
    
// }

// seq(x);

// const x = [1, 2, 3, 4, 5]

// function perm (arr) {

//   const y = arr.reduce((a, c)=> {
//       return a = a + c;
//   }, 0)

//   return y;
// }

// const z = perm(x);

// function newarr (arr1){
    
//    const m = []; 
//    const l = arr1.forEach((v)=> {
//      return  m.push (z - v);
//    })
//    return m;
// }

// const r = newarr(x);

// function maxmin (arr) {

//     console.log (`${arr[0]} is the maximum and ${arr[arr.length-1]}`);
// }

// maxmin(r);

// const val=[1,2,3,9,5,6,8,4];

// const arrval=val.sort();

// function duplicate(arr)
// {
//   const m = arr.filter((v)=>{
//     if(arr.indexOf(v)+1 !== v)
//       return arr;
//   })

//   return m;
  
// }
// const z = duplicate(arrval);

// function ans (az){
//     console.log (`${az[0]-1} is the missing number`)
// }

// ans(z);

// const x = [12, 13, 14, 15, 17];

// function  miss (arr) {

//     const m = arr.map((v, i, a)=> {

//         return v - a[0]
//     })
    
//     const n = m.filter((v)=> {
//         if(m.indexOf(v) !== v){
//             return m;
//         }
//     })

//     const 
// }

// console.log (miss (x));

// const x = "vimal kumar swamy"

// function cap (str){

//     const y = str.split(' '); 
//     const z = y.map((v)=> {
//       const m = v.split('');
//       const n = m[0].toUpperCase()+ v.slice(1);
//         return n;

//     })

//     return z.join(' ');

// }

// console.log (cap(x));

// const x = {
//     name: 'vimal',
//     age: 29
// }

// for (let i in x){
//    console.log(x[i]);
// }

// const x = 'javascripttttttt'

// function maxer (str) {

//   const y = str.split('');
//   return y.filter ((v, i)=> {
//      return y.indexOf(v) !== i 
//   })

// }

// let m = maxer(x);

// function maxChar(arr) {
//       const charMap = [];
    
//       arr.map(char => {
//         if (charMap[char]) {
//           return charMap[char]++;
//         } else {
//           charMap[char] = 1;
//         }
//       });
    
//       return charMap;
//     }
    
// const l = maxChar(m);

// console.log(l);

// const zz = Object.entries(l);

// console.log(zz);

// const yy = function (pt) {
   
//     const mm = [];

//     pt.forEach((i)=> {
//         mm.push(...i);
//     })
//     return mm;

// }

// console.log(yy(zz));

// const x = "Hello there, my name is Brad!"

// function lon (str) {

//     const y = str.toLowerCase().match(/[a-z0-9]+/g);

//     const z = y.sort ((a, b)=> {
//         return b.length - a.length
//     });

//     const m = z.filter((e)=> {
//       return e.length === z[0].length
//     })

//     return m;

// }

// console.log(lon(x));

// var hero = {
//     name: 'vimal',
//     getI : function (){
//         console.log (this);
//     }
// }

// console.log(hero.getI());

// const ar = [1,2,3,4,5];

// function summ (arr) {
//     return arr.length *(arr.length +1)/2
// };

// console.log(summ(ar)) ;

// function linear (arr, val) {
    
//    for (let i = 0; i<arr.length; i++){
        
//         if (arr[i] === val){
//             return i;
//         }
        
//     }

//     return -1;
    


// }

// console.log (linear ([10, 15, 16, 13, 12, 100, 99, 103], 109));


// function foo (){
//     var a = 10;

//     return function baz (){
//         console.log (a);
//     }
    
// }

// var bar = foo();
// bar();


// function identify() {
// 	return this.name.toUpperCase();
// }

// function speak() {
// 	var greeting = "Hello, I'm " + identify.call( this );
// 	console.log( greeting );
// }

// var me = {
// 	name: "Kyle"
// };

// var you = {
// 	name: "Reader"
// };

// console.log(identify.call( me )) ; // KYLE
// console.log(identify.call( you )) ; // READER
// // identify.call( you )

// speak.call(); // Hello, I'm KYLE
// speak.call(); // Hello, I'm READER

// function foo(num) {
    
//     console.log( "foo: " + num );
//     console.log (this.name);

// 	// keep track of how many times `foo` is called
// 	foo.count++;
// }

// var i;

// for (i=0; i<10; i++) {
    
// 	if (i > 5) {
//         var name = 'vimal';
// 		foo( i );
// 	}
// }

// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?

// function foo() {
// 	// return an arrow function
// 	return (a) => {
// 		// `this` here is lexically adopted from `foo()`
// 		console.log( this.a );
// 	};
// }

// var obj1 = {
// 	a: 2
// };

// var obj2 = {
// 	a: 3
// };

// var a = 100;

// var bar = foo.call( obj1 );

console.log (`person 1`);
console.log (`person 2`);

const preMovie = async () => {
    const bringTix = new Promise ((resolve, reject)=> {
        setTimeout(()=> resolve('vimal'), 3000)
    })

    // let tix = await bringTix;

    // return tix;
    return bringTix;
}

preMovie().then((m)=> {console.log (`${m}`)})


console.log (`person 4`);
console.log (`person 5`);


