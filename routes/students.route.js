const {Router} = require("express");
const { studentsController } = require("../controllers/students.controller");


const router = Router();

router.post("/students", studentsController.postStudents);
router.patch("/students/:id", studentsController.patchstudents);
router.delete("/students/:id", studentsController.deleteStudents);
router.get("/students", studentsController.getStudents);
router.get("/students/group/:id", studentsController.getstudentsByGroup);
router.get("/students/paymentsfull", studentsController.getStudentByPaymentsFull);
router.get("/students/paymentsHelf", studentsController.getStudentsByPaymentHelf);
router.get("/students/paymentsNull", studentsController.getStudentsByPaymentNull);
router.get("/groups/:id/offerPercent", studentsController.patchGroupByOffer);

module.exports = router;