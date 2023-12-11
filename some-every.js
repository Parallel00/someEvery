

function hasOddNumber(arr) {
    return arr.some(function (value) {
        return value % 2 !== 0;
    })
}


function hasAZero(num) {
    return num.toString().split('').some(function (valu) {
        return valu === '0';
    })
}


function hasOnlyOddNumbers(arr) {
    return arr.every(function (valu) {
        return valu % 2 !== 0;
    })
}


function hasNoDuplicates(arr) {
    return arr.every(function (valu) {
        return arr.indexOf(valu) === arr.lastIndexOf(valu);
    })
}


function hasCertainKey(arr, key) {
    return arr.every(function (valu) {
        return key in valu;
    })
}


function hasCertainValue(arr, key, searchValue){
  return arr.every(function(valu){
    return valu[key] === searchValue;
  })
}