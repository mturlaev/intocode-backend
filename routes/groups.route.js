const {Router} = require("express");
const { groupsController } = require("../controllers/groups.controller");


const router = Router();

router.post("/groups", groupsController.postGroup);
router.patch("/groups/:id", groupsController.patchGroup);
router.delete("/groups/:id", groupsController.deletegroup);
router.get("/groups", groupsController.getGroup);
router.get("/groups/:id/week", groupsController.getGroupByWeek);
router.get("/groups/:id/finished", groupsController.getGroupByFinished);

module.exports = router;