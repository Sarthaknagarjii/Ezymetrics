const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["new", "contacted", "qualified", "lost"],
    default: "new",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
