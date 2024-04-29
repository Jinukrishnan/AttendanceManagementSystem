import express from "express";
import env from "dotenv";
import Connection from "../Connection.js";
import router from "./router.js";
import cors from "cors";
env.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
Connection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server Started");
    });
  })
  .catch((error) => {
    console.log(error);
  });
