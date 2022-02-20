import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/", function (_: Request, res: Response) {
  res.sendFile(process.cwd() + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address());
});
