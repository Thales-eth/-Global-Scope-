const router = require("express").Router();

router.use("/", require('./course.routes'))
router.use("/", require('./user.routes'))
router.use("/auth", require('./auth.routes'))

module.exports = router;
