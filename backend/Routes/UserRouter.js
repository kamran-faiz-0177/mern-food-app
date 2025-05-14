const router = require("express").Router();
const { Signin, Signup } = require("../Controllers/UserController");

router.post("/signin", Signin);
router.post("/signup", Signup);

module.exports = router;