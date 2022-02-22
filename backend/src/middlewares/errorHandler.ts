import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "../errors/CustomError";

const errorHandler: ErrorRequestHandler = (error: CustomError, _, res, __) => {
  let CustomError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong, try again later",
  };

  if (error.message.includes("Cast to ObjectId failed")) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ Error: "Provided id has wrong format" });
  }

  return res.status(CustomError.statusCode).json({ Error: error.message });
};

export default errorHandler;
