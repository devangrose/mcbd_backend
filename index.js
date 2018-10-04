require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// Declare App 
const app = express();
const db = require('./models');

// Set Up Middleware
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

// Routes 
// GET route for getting candidate inforamtion 

app.get('/candidates', (req, res) => {
    db.Candidates.findAll().then((candidates) => {
        res.send(candidates)
    }).catch((err) => {
        console.log(err);
        res.status(400).send('an error has occurred'); 
    })
})

app.get('/candidate/:id', (req, res) => {
    db.Candidate.findById(req.params.id).then((candidate) => {
        res.send(candidate)
    }).catch((err) => {
        console.log(err);
        res.status(400).send('ya messed');
    })
});

app.get('')





app.get('*', (req, res) => {
    res.send({message: 'Unknown Route!'});
});


app.listen(process.env.PORT || 3000); 

