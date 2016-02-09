//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var innner = outer();
//Once you do that, invoke inner.

  //Code Here
innner();
//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

console.log(callFriend(435-215-9248))


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = function makeCounter() {
    var counter = 1;
    return function (){
      return counter++;
    }
}
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/

  //Code Here
function codeLove(){
  return("I love code")
}

function codeFriend(codeLove) {
  var codeEcho = function (){
      var counter = 1;
    if(counter++ === 1){
      return ("null");
    }else {
      codeLove();
  }}
  return codeEcho;
}

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
function fnCounter(someFunction,N){
  var counter = 1;
  return function(){
    counter++;
    if(counter <= N){
    return someFunction();
  }else {
    return("STOP");
  }
}
}


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

//   Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here
5 console.logs will display, with 1000 milliseconds inbetween each.

//  Now, run the function in your console and note what happpens.

//  Was your answer right or wrong?

  //Answer Here
   No

//   Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

    //Code Here
  var counter = function(){
      var num = 0;
      return function() {for (var i=1; i<=5; i++) {
         setTimeout( function timer(){
             console.log( num += 1 );
        }, i*1000 );
       }
     }
    }
    var time = counter();
    time();
//Next Problem

  // Make the following code work
  var funcArray = (function(x) {
    var arr = [x];
    return (function() {
      for (var i = 0; i <= arr.length; i++) {
        return arr.push(i);
      }
    })()
  })
  //funcArray(5);

  // Make the following code work
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  // *Hint: Don't let this fool you. Break down what's really happening here.
