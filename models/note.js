var mongoose = require("mongoose");

//Save a reference to the schema constructor
var Schema = mongoose.Schema;

//Using the schema constructor to create a new noteschema object similar to a sequelize model
var NoteSchema = new Schema({
    title: String,
    body: String
});

//This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

//Export the note model
module.exports = Note;