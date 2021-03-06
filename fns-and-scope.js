//Once you complete a problem, open up Chrome and check the answer in the console.

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name){
    if(name === "Tyler"){
      return 'true';
    }else {
      return 'false';
    }
  }
//Next problem

isTyler("Tyler");

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

  //Code Here
  function getName (name){
    name = prompt("What is your name?");

    return name;
  }

//Next Problem

  getName();

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

//Code Here
function welcome (){
  return ("Welcome, " + getName());
}

//Next problem

alert(welcome());

//What is the difference between arguments and parameters?

  //Answer Here
// An argument in context with functions is the actual value that is passed to the function ( as input) ,when it is called.

//Next problem

// Parameter refers to the variables that are used in the function declaration/definition to represent those arguments that were send to the function during the function call.

//What are all the falsy values in JavaScript and how do you check if something is falsy?

  //Answer Here
  //
  // false
  // 0 //(zero)
  // "" //(empty string)
  // null
  // undefined
  // NaN //(Not-a-Number)

//Next Problem

// All the above variables are falsy. Everything else is true.


//Create a function called myName that returns your name

  //Code Here
function myName(){
  return prompt('Please enter your name:');
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var myNewName = myName();

//Now alert the result of invoking newMyName

//Next problem

alert(myNewName);


//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(){
  return function(){
    return("Nichole");
  }
}
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
