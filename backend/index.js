const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // ✅ MUST be at the top before using process.env

const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI:", MONGO_URI); // debug log

app.use(express.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
