const mongoose =require("mongoose");
const { boolean } = require("webidl-conversions");

const studentSchema = mongoose.Schema({
    name: String,
    group: {
        ref: "Group",
        type: mongoose.SchemaTypes.ObjectId
    },
    payment: Number,
    status: {
        ref: "Status",
        type: mongoose.SchemaTypes.ObjectId
    },
    offer: {
        type: Boolean,
        default: false,
    },
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;