const removeFromArray = function(array, ...values) {
    /*
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!values.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
    */
   
    const newArray = [];
    array.forEach((item) => {
        if (!values.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
