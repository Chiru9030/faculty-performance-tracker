const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Faculty = require("../models/Faculty");

router.post("/seed", async (req, res) => {
  try {
    const { name, email, password, department } = req.body;

    if (!email.endsWith("@college.edu")) {
      return res.status(400).json({ message: "Email must be college email" });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const faculty = new Faculty({
      name,
      email,
      department,
      passwordHash,
    });

    await faculty.save();

    res.json({ message: "Faculty user created", faculty });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
