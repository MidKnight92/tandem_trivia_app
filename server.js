const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Modules
const randomTriviaQuestions = require('./public/scripts/trivia');
const { incrementNum, resetZero }= require('./public/scripts/num');


app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

// Create Template variable
app.locals.siteName = 'Tandem Trivia';

// Mount Route Middleware
app.use(express.static(path.join(__dirname, '/')));


app.use('/', routes({
    data: randomTriviaQuestions,
    incrementNum: incrementNum,
    resetZero: resetZero
}));


app.listen(PORT, () => {
    console.log(`Listening on Port: http://localhost:${PORT}`);
});
