
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars ,twix ){
return [twix, ... chocolateBars]
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
 chocolateBars.unshift("foo");
 return chocolateBars
}

function addElementToEndOfArray(chocolateBars, foo) {
  return [...chocolateBars, foo]
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo){
chocolateBars.push("foo");
return chocolateBars
}

function accessElementInArray(chocolateBars, 2)
return chocolateBars [2]

