const triviaData = require('../../data/Apprentice_TandemFor400_Data.json');

const generateRandomQuestions = () => {
    const data = []
    let triviaDataCopy = [...triviaData]
   
        for (let i = 0; i < 10; i++){
            // Generate Random Index up to array length
            const index = Math.floor(Math.random() * triviaDataCopy.length);
            // Push to data array
            data.push(triviaDataCopy[index]);
            // Remove from json copy
            triviaDataCopy.splice(index, 1)        
    }

    return data;
};



module.exports = generateRandomQuestions;