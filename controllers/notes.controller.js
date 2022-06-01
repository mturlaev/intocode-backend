const Note = require("../models/Note.model")

module.exports.notesController = {
    postNote: async (req, res) => {
        try {
            const note = await Note.create({
                text: req.body.text,
                studentId: req.body.studentId
            });
            res.json(note);
        } catch (error) {
            res.json(error.message)
        }
    },
    patchNote: async (req, res) => {
        try {
            const note = await Note.findByIdAndUpdate(req.params.id, {
                text: req.body.text,
                studentId: req.body.studentId
            })
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteNote: async (req, res) => {
        try {
            await Note.findByIdAndRemove(req.params.id);
            res.json("заметка удалена")
        } catch (error) {
            res.json(error.message)
        }
    },
    getNote: async (req, res) => {
        try {
            const note = await Note.find().populate("studentId");
            res.json(note)
        } catch (error) {
            res.json(error.message)
        }
    },
    getNoteByStudent: async (req, res) => {
        try {
            const note = await Note.find({studentId: req.params.id}).populate("studentId");
            res.json(note)
        } catch (error) {
            res.json(error.message)
        }
    },
}