const express = require("express");
const {
  studentRegisterController,
  getStudentController,
  getStudentControllerbyId,
} = require("../controller/StudentController");

const router = express.Router();

router.post("/register", studentRegisterController);
router.get("/data", getStudentController);
router.get("/id/:rollNo", getStudentControllerbyId);

module.exports = router;
