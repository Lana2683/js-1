
//  -TASK 1- Split and Merge

function splitAndMerge(str, sp) {
  return str.split(" ").join("").split("").join(sp);
}

console.log(splitAndMerge("Hello World!",","));
console.log(splitAndMerge("My name is John", " "))

// ############################

//  -TASK 2- Convert a hash into an array

function convert(hash){
  var arr = [];
  for (var prop in hash) {
    arr.push([prop,hash[prop]])
  }
  return arr;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

// ############################

//  -TASK 3- Convert words into camel casing

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, function(match, chr)
  {
    return chr.toUpperCase();
  });
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));


//  -TASK 4- Reverse each word in the sentence

function strReverse(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(strReverse(" A fun little challenge! "));

// ############################

// -TASK 5-  Return the expansion of that string

function stringExpansion(str) {
  return str.replace(/[0-9]\D+/g, function(s){
   var x =+ (s.split('')[0]),
       res = [],
       arr = s.split('').slice(1);
  for(var i = 0; i < arr.length; i++){
    res.push(Array(x+1).join(arr[i]));
  }
  return res.join('');
}).replace(/\d+/g,'');
}

console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'))

// ############################

//  -TASK 6- Return the largest and smallest number

function largest() {
  return Math.max.apply(null, arguments);
}

function smallest() {
  return Math.min.apply(null, arguments)
}

console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3))

// ############################

//  -TASK 7- Transform array of numbers to array of functions

var baseArray = [10, 20, 30, 40, 50],
    newArray = transform(baseArray);

function transform(baseArray) {
  newArray = [];
  for (var i = 0; i < baseArray.length; i ++) {
    newArray[i] = (function (x) { 
      return function () { 
        return x; 
      };
    })(baseArray[i]);
  }
    return newArray;
  }

console.log(newArray[3]())

// ############################

// -TASK 8- Add up argments. You should use reculsion

function sum(){
  var arr = Array.from(arguments);
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sum.apply(null, arr.slice(1));
}

console.log(sum(1,3,5,7));

// ############################

//  - TASK 9- Log values one by one till zero with one second delay

function countDown(num) {
  setTimeout(function rec() {
    if (num < 0) {
      return null
    }
    console.log(num);
    num--;
    setTimeout(rec, 1000); 
  }, 1000);
}

console.log(countDown(3))

// ############################

// -TASK 10- Write a polyfill for a .bind() function 

Function.prototype.myBind = function (num) {
  var foo = this;
  return function () {
    return foo.apply(num, arguments);
  }
}

function addPropToNumber(number) { 
  return this.prop + number; 
}

var bound = addPropToNumber.myBind({ prop: 9 });

console.log(bound(1))

// ############################
