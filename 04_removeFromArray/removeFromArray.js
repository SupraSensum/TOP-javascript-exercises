const removeFromArray = function() {
    //  arguments[0] = the array
    // 
    //  if arguments.length > 1
    //      for each additional argument (arguments.length -1)
    //          Find the index that matches the argument
    //          pop(that_index)
    // 
    //  return arguments[0]

    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; i++) {
            let indexToRemove = arguments[0].indexOf(arguments[i]);
            if (indexToRemove < 0) continue;
            arguments[0].splice(indexToRemove, 1);
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
