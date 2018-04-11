var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using the Schema constructor, create a new UserSchema object
//create a new schema called BookEntry
//title, authors, start, end, pages, summary and img
var BookSchema = new Schema({
    title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  
  startRead: {
    type: Date,
    required: false
  },
  endRead: {
    type: Date,
    required: false
  },
  pages: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }, 
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  }
 

 });

// This creates our model from the above schema, using mongoose's model method
var NewBook = mongoose.model("NewBook", BookSchema);
// Export the Book model
module.exports = NewBook;