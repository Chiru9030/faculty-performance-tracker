const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", unique: true },
  room: { type: String, required: true },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Location", LocationSchema);
