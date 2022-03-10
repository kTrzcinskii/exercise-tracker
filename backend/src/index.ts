import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";
import mongoose from "mongoose";
import userRouter from "./routes/user";
import swaggerUI from "swagger-ui-express";
import * as SwaggerDocument from "./swagger.json";

const app = express();
app.use(cors());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (_: Request, res: Response) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(SwaggerDocument));

app.use("/api/users", userRouter);

//handling errors
app.use(errorHandler);

//last middleware
app.use(notFound);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    app.listen(process.env.PORT || 5000, () => {
      console.log("Your app is listening on port " + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
