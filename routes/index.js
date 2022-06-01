const {Router} = require("express");


const router = Router();

router.use(require("./students.route"));
router.use(require("./groups.route"));
router.use(require("./statuses.route"));
router.use(require("./notes.route"));

module.exports = router;