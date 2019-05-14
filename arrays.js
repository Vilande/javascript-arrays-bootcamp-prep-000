
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars ,twix ){
return [twix, ... chocolateBars]
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
 chocolateBars.unshift("foo");
 return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo) {
  return [chocolateBars, ...1]
}