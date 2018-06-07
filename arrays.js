var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arro, element) {
  return [element, ...arro]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
return(array)
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(arro, ele) {
arro.push(ele)
return(arro)
}

function accessElementInArray(array, index) {
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
return array
}


function removeElementFromBeginningOfArray(array) {
array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  const array.slice(1)
  return array
}
