const { json } = require("express/lib/response");
const Status = require("../models/Status.model");

module.exports.statusesController = {
    postStatus: async (req, res) => {
        try {
            const status = await Status.create({
            text: req.body.text,
            })
        } catch (error) {
            res.json(error.message)
        }
    },
    patchStatus: async (req, res) => {
        try {
            const status = await Status.findByIdAndUpdate(req.params.id, {
                text: req.body.text
            });
            res.json(status)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteStatus: async (req, res) => {
        try {
            await Status.findByIdAndRemove(req.params.id);
            res.json("статус удален")
        } catch (error) {
            res.json(error.message)
        }
    },
    getStatus: async (req, res) => {
        try {
            const status = Status.find();
            res.json(status)
        } catch (error) {
            res.json(error.message)
        }
    },
}