
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars ,twix ){
return [twix, ... chocolateBars]
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
 chocolateBars.unshift("foo");
 return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push("foo");
  return chocolateBars
}