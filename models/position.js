const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
    weight: Number,
    stance: String,
    title: String,
})

module.exports = mongoose.model('Position', positionSchema); 