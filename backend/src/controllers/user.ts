import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError";
import User from "../models/User";

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
  res.send("create new exercise");
};

export const getUserLogs = async (req: Request, res: Response) => {
  res.send("get user logs");
};
