const express = require('express');
const router = express.Router();


module.exports = ({ data, update, reset,  zero, increment}) => {
  let score;
  let jsonData;
    router.post('/questions/:id', (req, res) => {
        try {
            let data = jsonData[parseInt(req.params.id)];
            if (data['correct'] === req.body.answer){
                score = increment(score);
                res.status(200).render('message',{
                    message: `<h1>CORRECT</h1><p><bold>${data['correct']}</bold> is the right answer! \n Your Score is now ${score}</p>`,
                    button: `<a href="/questions/${parseInt(req.params.id) + 1}" role="button" class="btn btn-primary">Next Question</a>`,
                    pageTitle: 'Correct'
                });
            } else {
							res.status(200).render('message',{
								message: `<h1>INCORRECT</h1><p>Sorry, <bold>${data['correct']}</bold>  is the correct answer to:\n ${data['question']} \n Your Score is currently ${score}</p>`,
								button: `<a href="/questions/${parseInt(req.params.id) + 1}" role="button" class="btn btn-primary">Next Question</a>`,
								pageTitle: 'Incorrect'
							});
            }
        } catch (error) {
					res.status(400).render('message', {
						message: `<h1>Error/h1><p>Something went wrong</p>`,
						button: `<a href="/" role="button" class="btn btn-primary">Home</a>`,
						pageTitle: 'Error'
					});
					console.error(error);
        }
    });

    router.get('/questions/:id', (req, res) => {
        try {

            if (parseInt(req.params.id) === 10){
							res.status(200).render('message', {
								message: `<h1>Game Over</h1><p>Congrats on finishing the game!\n You got ${score} out of 10 questions correct.</p>`,
								button: `<a href="/" role="button" class="btn btn-primary">Home</a>`,
								pageTitle: 'Finished'
							});
            } else {
                let currentIteration = update(parseInt(req.params.id));
                let data = jsonData[parseInt(req.params.id)];

                if (data){
									res.status(200).render('question', {
										pageTitle: `Question ${parseInt(req.params.id + 1)}`,
										data: data,
										num: parseInt(req.params.id),
										id: currentIteration
									});
                } else {
									res.status(200).render('message', {
										message: `<h1>Error</h1><p>No question with an id of ${req.params.id} was found.</p>`,
										button: `<a href="/" role="button" class="btn btn-primary">Home</a>`,
										pageTitle: 'Error'
								});
							}
            }
        } catch (error) {
					res.status(400).render('message', {
					message: `<h1>Error</h1><p>No question with an id of ${req.params.id} was found.</p>`,
					button: `<a href="/" role="button" class="btn btn-primary">Home</a>`,
					pageTitle: 'Error'
        });
					console.error(error);
        }
    });

    router.get('/', async (req, res) => {
        try {
            jsonPromise = await data();
            jsonData = [...jsonPromise]
            score = zero();
            const index = reset();
            res.status(200).render('index.ejs', {
							pageTitle: `Tandem Trivia`,
							index: index
            });
        } catch (error) {
            res.status(400).render('message', {
							message: '<h1>Error</h1><p>Something went wrong</p>',
							button: `<a href="/" role="button" class="btn btn-primary">Home</a>`,
							pageTitle: 'Error'
            });
					console.error(error);
        }
    });

  return router

}
