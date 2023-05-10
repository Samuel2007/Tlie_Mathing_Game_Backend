const express = require("express");
const Model = require("../model/model");

const router = express.Router();

router.post("/post", async (req, res) => {
  console.log(req);
  const data = new Model({
    name: req.body.name,
    time: req.body.time,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

module.exports = router;
