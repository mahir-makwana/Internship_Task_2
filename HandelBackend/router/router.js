const express = require("express");
const handel = require("../controller/handel");
const validate = require("../middleware/validate");
const { formSchema } = require("../validation/Formvalidation");
const router = express.Router();

router.post("/submit", validate(formSchema), handel);
module.exports = router;
