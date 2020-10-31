const updateIteration = (iteration) =>{
    return iteration + 1;
}

const resetCurrentIteration = () =>{
    return 0;
}

module.exports = {update: updateIteration, reset: resetCurrentIteration}