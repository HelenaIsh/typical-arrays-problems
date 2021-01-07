
exports.min = function min (array) {
    if (!array || array.length === 0) return 0;
    let min = array[0];
    for (const el of array) {
        if (el < min) {
            min = el;
        }
    }
    return min;
}

exports.max = function max (array) {
    if (!array || array.length === 0) return 0;
    let max = array[0];
    for (const el of array) {
        if (el > max) {
            max = el;
        }
    }
    return max;
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) return 0;
    let sum = array.reduce((sum, el) => (sum + el), 0);
    return sum/array.length;
}
