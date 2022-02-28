import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError";
import User from "../models/User";
import Exercise from "../models/Exercise";
import { filterDateOjb } from "../utils/filterDateObjInterface";

export const getAllUsers = async (_: Request, res: Response) => {
  const users = await User.find({});

  res.status(StatusCodes.OK).json(users);
};

export const createNewUser = async (req: Request, res: Response) => {
  const { username } = req.body;

  if (!username) {
    throw new CustomError(
      "You must provide username to  create user",
      StatusCodes.BAD_REQUEST
    );
  }

  const user = await User.create({ username });

  res
    .status(StatusCodes.CREATED)
    .json({ username: user.username, _id: user._id });
};

export const createNewExercise = async (req: Request, res: Response) => {
  const userId = req.params._id;
  const user = await User.findById(userId);

  if (!user) {
    throw new CustomError(
      "There is no user with provided id.",
      StatusCodes.NOT_FOUND
    );
  }

  const body = req.body;

  if (!body.duration) {
    throw new CustomError(
      "You must provide duration time",
      StatusCodes.BAD_REQUEST
    );
  }

  if (!body.description) {
    throw new CustomError(
      "You must provide description",
      StatusCodes.BAD_REQUEST
    );
  }

  // body.username = user.username;
  // body.userId = userId;

  const exercise = await Exercise.create({ ...body, user });

  res.status(StatusCodes.CREATED).json({
    _id: user._id,
    username: user.username,
    date: exercise.date.toDateString(),
    duration: exercise.duration,
    description: exercise.description,
  });
};

export const getUserLogs = async (req: Request, res: Response) => {
  const userId = req.params._id;
  const user = await User.findById(userId);

  if (!user) {
    throw new CustomError(
      "There is no user with provided id.",
      StatusCodes.NOT_FOUND
    );
  }

  const filterFrom = req.query.from;
  const filterTo = req.query.to;
  const filterLimit = req.query.limit;

  let filterDateObj: filterDateOjb = {};

  if (filterFrom && typeof filterFrom === "string") {
    filterDateObj.$gt = new Date(filterFrom);
  }

  if (filterTo && typeof filterTo === "string") {
    filterDateObj.$lt = new Date(filterTo);
  }

  let queryObj = {};
  if (filterFrom || filterTo) {
    queryObj = { ...queryObj, date: filterDateObj };
  }

  const exercisesPromise = Exercise.find({
    user,
    ...queryObj,
  }).sort({ date: -1 });

  let exercises;

  if (filterLimit) {
    exercises = await exercisesPromise.limit(Number(filterLimit));
  } else {
    exercises = await exercisesPromise;
  }

  const log: any[] = [];

  exercises.forEach((excercise) => {
    const { duration, description, date } = excercise;
    log.push({ description, duration, date: date.toDateString() });
  });

  const count = log.length;

  res
    .status(StatusCodes.OK)
    .json({ _id: user._id, username: user.username, count, log });
};
