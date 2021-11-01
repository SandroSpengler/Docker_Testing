const express = require("express");
const router = express.Router();

const ApiSchema = require("../../Models/api");

router.get("", async (req, res) => {
  try {
    const tmpApiSchema = await ApiSchema.find();

    res.json(tmpApiSchema);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const tmpApiSchema = new ApiSchema({ firstName: "dev", lastName: "environment 0" });

    const savedApiSchema = await tmpApiSchema.save();

    res.json(savedApiSchema);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
