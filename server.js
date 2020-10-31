const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Modules
const randomTriviaQuestions = require('./public/scripts/trivia');
const { update, reset }= require('./public/scripts/iter');
const { incrementScore, zeroScore }= require('./public/scripts/score');

// Set for deployment
app.set('trust proxy', 1);

// Create Session
app.use(session({
    name:'session',
    keys: ['shhh', '123']
}));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

// Create Template variable
app.locals.siteName = 'Tandem Trivia';

// Mount Route Middleware 
app.use(express.static(path.join(__dirname, '/')));


app.use('/', routes({
    data: randomTriviaQuestions,
    update: update,
    reset: reset,
    zero: zeroScore,
    increment: incrementScore
}));


app.listen(PORT, () => {
    console.log(`Listening on Port: http://localhost:${PORT}`);
});