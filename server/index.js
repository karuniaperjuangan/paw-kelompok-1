import express from "express";
// import bodyParser from 'body-parser'; DEPRECATED
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import AgendaRoute from "./routes/Agenda.js"

const app = express();

app.use("/agenda", AgendaRoute);

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config(); // Access to Environment variables
const CONN_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@paw-kapecal.slmpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((ERROR) => console.log(ERROR.message)); 
