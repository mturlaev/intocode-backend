const {Router} = require("express");
const { statusesController } = require("../controllers/status.controller");


const router = Router();

router.post("/status", statusesController.postStatus);
router.patch("/status/:id", statusesController.patchStatus);
router.delete("/status/:id", statusesController.deleteStatus);
router.get("/status", statusesController.getStatus);

module.exports = router;