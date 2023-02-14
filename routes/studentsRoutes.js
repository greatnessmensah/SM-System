const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/studentsController");

// create new student
router.post("/add", studentsController.createStudent);

// get single student
router.get("/get/:studentId", studentsController.getSingleStudent);


