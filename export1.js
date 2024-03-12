

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


function makeArray(str) {
    const arr = str.split('');
    return arr;
}

function makeString(arr) {
    const str = arr.join('');
    return str;
}

function reverseArray(arr) {
    return arr.reverse();
}

module.exports = {
    makeArray,
    makeString,
    reverseArray,
    sortArray,
    sumArray
}

