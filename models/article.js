var mongoose = require("mongoose");

//saves a reference to the schema constructor
var Schema = mongoose.Schema;

//Using the schema constructor, create a new userschema object
//Similar to a sequelize model
var ArticleSchema = new Schema({
    //title is required and of type of string
    title: {
        type: String,
        unique: true
    },

//title is required and of type of string
    link: {
        type: String,
        unique: true
    },

    //note is an object that stores a note id
    //the ref property links the objectid to the note model
    //this allows us topopulate the article with an associated note
    note: [{
        type:Schema.Types.ObjectId,
        ref: "Note"
    }]

 
    
});

//This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

//Export the Article model
module.exports = Article;