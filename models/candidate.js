const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    affiliation: String,
    url: String,
    image: String,
    position: [{type: mongoose.Schema.Types.ObjectId, ref:'Position'}],
    sources: [String] 
})

module.exports = mongoose.model('Candidate', candidateSchema); 
