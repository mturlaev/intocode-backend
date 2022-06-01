const Student = require("../models/Student.model")

module.exports.studentsController = {
    postStudents: async (req, res) => {
        try {
            const student = await Student.create({
                name: req.body.name,
                group: req.body.group,
                payment: req.body.payment,
                status: req.body.status,
                offer: req.body.offer,
            });
            res.json(student)
        } catch (error) {
            res.json(error.message)
        }
    },
    patchstudents: async (req, res) => {
        try {
            const student = await Student.findOneAndUpdate(req.params.id, {
                name: req.body.name,
                group: req.body.group,
                payment: req.body.payment,
                status: req.body.status,
                offer: req.body.offer,
            });
            res.json(student);
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteStudents: async (req, res) => {
        try {
            await Student.findByIdAndRemove(req.params.id);
            res.json("студент удален")
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudents: async (req, res) => {
        try {
            const student = await Student.find({}).populate("group").populate("status");
            res.json(student)
        } catch (error) {
            res.json(error.message)
        }
    },
    getstudentsByGroup: async (req, res) => {
        try {
            const student = await Student.find({group: req.params.id}).populate("group");
            res.json(student)
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentByPaymentsFull: async (req, res) => {
        try {
            const student = await Student.find({payment: 100}).populate("group");
            res.json(student);
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsByPaymentHelf: async (req, res) => {
        try {
            const student = await Student.find({payment: 50}).populate("group");
            res.json(student);
        } catch (error) {
            res.json(error.message)
        }
    },
    getStudentsByPaymentNull: async (req, res) => {
        try {
            const student = await Student.find({payment: 0}).populate("group");
            res.json(student);
        } catch (error) {
            res.json(error.message)
        }
    },
    patchGroupByOffer: async (req, res) => {
        try {
            const students = await Student.find({group: req.params.id})
            const offer = students.filter(students => students.offer)
            const percent = Math.floor((offer.length * 100) / students.length);
            res.json(percent)
        } catch (error) {
            res.json(error.message)
        }
    },
}