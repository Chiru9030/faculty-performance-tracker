const express = require("express");
const router = express.Router();
const Location = require("../models/Location");
const auth = require("../middleware/authMiddleware");

// Update location
router.post("/update-location", auth, async (req, res) => {
  try {
    const { room } = req.body;

    if (!room) {
      return res.status(400).json({ message: "Room is required" });
    }

    const updatedLocation = await Location.findOneAndUpdate(
      { facultyId: req.facultyId },
      { room, lastUpdated: Date.now() },
      { new: true, upsert: true }
    );

    res.json({ message: "Location updated", location: updatedLocation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Public route: Get all faculty locations
router.get("/all", async (req, res) => {
  try {
    const locations = await Location.find().populate("facultyId", "name email department");
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
