const router = require("express").Router();

router.use("/", require('./course.routes'))
router.use("/user", require('./user.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/upload", require('./upload.routes'))
router.use("/", require('./code.routes'))

module.exports = router;
