import express from "express";
import { app } from "./app";
import cors from "cors";

import { router } from "./routes";

app.use(express.json());

app.use(cors());
app.use(router)

app.listen(3333, () => {
  console.log("Server Up 🚀🚀");
});
