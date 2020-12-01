const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
app.use(express.json());

const db = config.get('mongoURI');
const User = require('./models/User.js');


mongoose
	.connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
	.then(() => console.log('MongoDB Connection Successfull!'))
	.catch(err => console.log(err));

/*  user_id: '1',
	google_group_id: '1',
	email: 'lizard.king@smashmytrash.com',
	name: 'Lizard King',
	role: 'Partner'
*/

// Add a new entry
app.post('/', (req, res) => {
	const newUser = new User({
		user_id: req.body.user_id,
		google_group_id: req.body.google_group_id,
		email: req.body.email,
		name: req.body.name,
		role: req.body.role,
	});
	newUser
		.save()
		.then(item => res.json(item));
});

// Read all entries
app.get('/', (req, res) => {
	User.find()
	  .sort({ date: -1 })
	  .then(items => console.log(res.json(items)));
});

// Delete an entry
app.delete('/:id', (req, res) => {
	User.findOneAndDelete({ _id: req.params.id })
	  .then(() => res.json({ success: true }))
	  .catch(err => res.status(404).json({ success: false }));
});

// Update an entry
app.put('/:id', (req, res) => {
	User.findOneAndUpdate({ _id: req.params.id }, req.body)
	  .then(() => res.json({ success: true }))
	  .catch(err => res.status(404).json({ success: false }));
});

const port = 5005;
app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));