const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should(); //assertion type
const server = require('../server');

chai.use(chaiHttp); // allow us to make http request to our server

// Todo 

// // Describe what is being tested
// describe('/GET:id Questions', () => {
// 	it('it should GET a question', (done) => {
// 		chai.request(server)
// 			.get('/questions:id')
// 			.end((err, res) => {
// 				res.should.have.status(200);
// 				res.params.should.be.a('string');

// 				done();
// 			});
// 	});
// }); //End of GET:id Questions

// // Describe what is being tested
// describe('/POST:id Questions', () => {
// 	it('it should POST a question', (done) => {
// 		chai.request(server)
// 			.get('/questions:id')
// 			.end((err, res) => {
// 				res.should.have.status(200);
// 				res.body.should.be.a('string');

// 				done();
// 			});
// 	});
// }); //End of POST:id Questions
