const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    type: String,
    title: String,
    desc: String,
    questions: [],
    stage: String,
    answer: []
});

let forms = mongoose.model('forms', formSchema);

module.exports = {forms}