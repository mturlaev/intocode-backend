const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
    name: String,
    week: Number,
    finished: {
        type: Boolean,
        defalt: false,
    }
})

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;