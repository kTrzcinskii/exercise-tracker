import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError";

export const getAllUsers = async (req: Request, res: Response) => {
  res.send("get all the users");
};

export const createNewUser = async (req: Request, res: Response) => {
  res.send("create new user");
};

export const createNewExercise = async (req: Request, res: Response) => {
  res.send("create new exercise");
};

export const getUserLogs = async (req: Request, res: Response) => {
  res.send("get user logs");
};
