require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const dataRoutes = require("./routes/dataRoutes");

const app = express();

// Connect to the database
connectDB();

app.use(express.json());

app.use("/api", dataRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
