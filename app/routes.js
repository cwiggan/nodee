//route

var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

//export
module.exports = router;

//about page
router.get('/about', (req, res) => {
	
	var users = [
		{ name:'Molly', email:'me@mail.com', site:'molly.com', img: 'https://unsplash.it/200/300/?random' },
		{ name:'Billy', email:'me@mail.com', site:'billy.com', img: 'https://unsplash.it/200/300/?random' },
		{ name:'Luke', email:'me@mail.com', site:'luke.com', img: 'https://unsplash.it/200/300/?random' },
		{ name:'Justice', email:'me@mail.com', site:'justice.com', img: 'https://unsplash.it/200/300/?random' }
	];
	res.render('about',{ team: users });

});

router.get('/contact', (req, res) => {
	res.render('contact');
});
router.post('/form', (req, res) => {
	res.send('Thank For Contacting Us ' + req.body.name + '! We will get back to you soon);
});

