import express from "express";
import {
  getAllUsers,
  createNewUser,
  createNewExercise,
  getUserLogs,
} from "../controllers/user";

const router = express.Router();

router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:_id/exercises").post(createNewExercise);

router.route("/:_id/logs").get(getUserLogs);

export default router;
