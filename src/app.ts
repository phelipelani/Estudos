import express, { Application } from "express";
import { renderAllteam } from "../logic";

const app: Application = express();

app.use(express.json());

app.get("/team",renderAllteam)









app.listen(5000, () => {
  console.log("Server is Running");
});
