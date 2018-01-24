
var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(fArray,fElement) {
  var newArray = [];
  newArray = fArray.unshift(fElement);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(fArray,fElement) {
  fArray = fArray.unshift(fElement);
  return fArray;
}

function addElementToEndOfArray(fArray,fElement) {
  var newArray = [];
  newArray = fArray.push(fElement);
  return newArray;
}

function destructivelyAddElementToEndOfArray(fArray,fElement) {
  fArray = fArray.push(fElement);
  return fArray;
}
