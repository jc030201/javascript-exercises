const repeatString = function(word, numberOfTimes) {
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    let temp = "";
    for (let i = 0; i < numberOfTimes; i++) {
        temp += word;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
