const { Router } = require("express");
const { savecreator } = require("../controller/saveCreater.controller");



const router = Router();

router.route("/savecreator").post(savecreator)

module.exports = router;