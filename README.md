# Tandem Trivia

## Project Overview
Tandem Trivia is a Node.js and Express trivia app. Users will be presented with 10 multiple-choice questions and will be able to select only one of those options. Once choice is submitted the user will be presented with the correct answer and their current score. Once the round is finished (10 questions per round) the user will be able to see their overall score and have the opportunity to play again.

## Installation
Use the package manager [npm](https://docs.npmjs.com/cli/v6/commands/npm-install) to install dependencies
`npm install` then run `npm start`

The server runs on Port 3000.

There are three routes:

- http://localhost:3000/ - homepage
- http://localhost:3000/questions/:id - GET show each respective question. POST submits answers and shows result

## Dependencies
- Express.js
- Body-parser
- EJS

## Development
This project uses EditorConfig to standardize text editor configuration.
Visit http://editorconfig.org for details.

## Future Plans
- Incorporate unit testing with Mocha and Chai
- Implement React for the front-end, incorporate MongoDB, and add more trivia questions.
- Add a leaderboard 
- Allow users to compete amongst one another

## Credits and acknowledgments
Tandem for supplying the json data for trivia questions
