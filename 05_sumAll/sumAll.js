const sumAll = function(value1, value2) {
    if (value1 < 0 || value2 < 0) {
        return "ERROR";
    }
    if (typeof value1 != "number" || typeof value2 != "number") {
        return "ERROR";
    }
    let temp = 0;
    let start = Math.min(value1, value2);
    let finish = Math.max(value1, value2) + 1;
    for (let i = start; i < finish; i++) {
        temp += i;
    }
    return temp;
};

// Do not edit below this line
module.exports = sumAll;
