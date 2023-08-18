const reverseString = function(word) {
    /*
    let temp = "";
    for (let i = word.length - 1; i >= 0; i--) {
        temp += word[i];
    }
    return temp;
    */
    return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
