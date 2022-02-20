import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(cors());

app.use(express.static("public"));

app.get("/", function (_: Request, res: Response) {
  res.sendFile(process.cwd() + "/views/index.html");
});

//handling errors
app.use(errorHandler);

//last middleware
app.use(notFound);

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
  console.log("Your app is listening on port " + port);
});
