const { Router } = require("express");
const login = require("./user/login");
const logout = require("./user/logout");
const refresh = require("./user/refresh");

const router = Router();

router.use("/login", login);
router.use("/logout", logout);
router.use("/refresh", refresh);

module.exports = router;
