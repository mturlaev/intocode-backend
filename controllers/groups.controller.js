const Group = require("../models/Group.model")


module.exports.groupsController ={
    postGroup: async (req, res) => {
        try {
            const group = await Group.create({
                name: req.body.name,
                week: req.body.week,
                finished: req.body.finished,
            });
            res.json(group)
        } catch (error) {
            res.json(error.message)
        }
    },
    patchGroup: async (req, res) => {
        try {
            const group = await Group.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                week: req.body.week,
                finished: req.body.finished,
            });
            res.json(group)
        } catch (error) {
            res.json(error.message)
        }
    },
    deletegroup: async (req, res) => {
        try {
            await Group.findByIdAndRemove(req.params.id);
            res.json("группа удалена")
        } catch (error) {
            res.json(error.message)
        }
    },
    getGroup: async (req, res) => {
        try {
            const group = await Group.find();
            res.json(group)
        } catch (error) {
            res.json(error.message)
        }
    },
    getGroupByWeek: async (req, res) => {
        try {
            const group = await Group.find({week: req.params.id});
            res.json(group)
        } catch (error) {
            res.json(error.message)
        }
    },
    getGroupByFinished: async (req, res) => {
        try {
            const group = await Group.find({finished: erq.params.id});
            res.json(group)
        } catch (error) {
            res.json(error.message)
        }
    }, 
}