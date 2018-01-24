
var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(fArray,fElement) {
  return [fElement,...fArray];
}

function destructivelyAddElementToBeginningOfArray(fArray,fElement) {
  fArray.unshift(fElement);
  return fArray;
}

function addElementToEndOfArray(fArray,fElement) {
  return [...fArray,fElement];
}

function destructivelyAddElementToEndOfArray(fArray,fElement) {
  fArray.push(fElement);
  return fArray;
}
