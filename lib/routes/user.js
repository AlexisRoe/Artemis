const { Router } = require("express");
const login = require("./login");
const logout = require("./logout");
const refresh = require("./refresh");

const router = Router();

router.use("/login", login);
router.use("/logout", logout);
router.use("/refresh", refresh);

module.exports = router;
