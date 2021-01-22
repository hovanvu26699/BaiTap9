const mongoose = require('mongoose')
const { Schema } = mongoose;

const postSchema = new Schema({
    author: String,
    content: String
},
    {
        collection: 'Posts'
    });

module.exports = mongoose.model('Post', postSchema)