
var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(fArray,fElement) {
  return [fElement,...fArray];
}

function destructivelyAddElementToBeginningOfArray(fArray,fElement) {
  return fArray.unshift(fElement);
}

function addElementToEndOfArray(fArray,fElement) {
  return [...fArray,fElement];
}

function destructivelyAddElementToEndOfArray(fArray,fElement) {
  return fArray.push(fElement);
}
