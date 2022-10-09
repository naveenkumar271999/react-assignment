// server.js
require("dotenv").config(); //added
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); //added

const app = express();

const profile = require("./routes/profile");
// connect database
connectDB();//added

app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
app.use("/api/profile", profile);
// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});