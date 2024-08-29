import express from "express";
const router = express.Router();

import { homeController } from "../controllers/homeController.js";
import { studentdashboardController } from "../controllers/studentdashboardController.js";
import { teacherdashboardController } from "../controllers/teacherdashboardController.js";
import { studentnoticeboardController } from "../controllers/studentnoticeboardController.js";
import { studentattendanceController } from "../controllers/studentattendanceController.js";
import { studentmoduleController } from "../controllers/studentmoduleController.js";
import { studenttimetableController } from "../controllers/studenttimetableController.js";
import { studentquizController } from "../controllers/studentquizController.js";
import { studentachievementsController } from "../controllers/studentachievementsController.js";
import { studentreportcardController } from "../controllers/studentreportcardController.js";
import { teachernoticeboardController } from "../controllers/teachernoticeboardControlle.js";
import { teacherstudentsController } from "../controllers/teacherstudent.js";
import { teacherattendanceController } from "../controllers/teacherattendanceController.js";
import { teachertimetableController } from "../controllers/teachertimetableController.js";
import { teacherquizesController } from "../controllers/teacherquizesController.js";
import { teacherreportcardController } from "../controllers/teacherreportcardController.js";

router.get("/", homeController);
router.get("/student_dashboard", studentdashboardController);
router.get("/student_noticeboard", studentnoticeboardController);
router.get("/student_attendance", studentattendanceController);
router.get("/student_modules", studentmoduleController);
router.get("/student_timetable", studenttimetableController);
router.get("/student_quizes", studentquizController);
router.get("/student_achievements", studentachievementsController);
router.get("/student_reportcard", studentreportcardController);
router.get("/teacher_dashboard", teacherdashboardController);
router.get("/teacher_noticeboard", teachernoticeboardController);
router.get("/teacher_students", teacherstudentsController);
router.get("/teacher_attendance", teacherattendanceController);
router.get("/teacher_timetable", teachertimetableController);
router.get("/teacher_quizes", teacherquizesController);
router.get("/teacher_reportcard", teacherreportcardController);

export default router;
