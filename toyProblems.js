//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(string){
    return string.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(arr){
    var answer = [];
    var sortedArr = arr.sort();
    for (var i = 0; i<sortedArr.length; i ++){
      if(sortedArr[i] !== sortedArr[i + 1]){
        answer.push(sortedArr[i]);
      }
    }
    return answer;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (string) {
    var answer = [];
    var stringArr = string.split(' ');
    for (var i = 0; i < stringArr.length; i++){
      answer.push(stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1));
    }
    return answer.join(' ');
  },



  vowelCounter: function(string){
    var answer = 0;
    var stringArr = string.split('');
    for (var i = 0; i < stringArr.length; i++){
      switch(stringArr[i]){
        case 'a' :
        answer = answer + 1;
        break;
        case 'e' :
        answer = answer + 1;
        break;
        case 'i' :
        answer = answer + 1;
        break;
        case 'o' :
        answer = answer + 1;
        break;
        case 'u' :
        answer = answer + 1;
        break;
      }
    }
    return answer;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (num) {
  if(num < 2){return false;}
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
    return true;
},

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
};
