const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const blogRouter = require("./controllers/blog");

const app = express();

const mongoUrl = config.MONGO_URI;
mongoose.connect(mongoUrl, { family: 4 });

app.use(express.json());
app.use("/api/blogs", blogRouter);

module.exports = app;
