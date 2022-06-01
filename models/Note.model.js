const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    text: String,
    studentId: {
        ref: "Student",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;