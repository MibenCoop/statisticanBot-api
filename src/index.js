import express from "express";
import path    from "path";
import bluebird from "bluebird";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import bot from "./routes/bot"

const port = "8080";
const app = express();
app.use(bodyParser.json());

// mongoose require promise, because default library is deprecated
mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/statisticanBot");

app.use("/api/bot", bot);

app.listen(port, () => console.log(`Running on localhost:${port}`));