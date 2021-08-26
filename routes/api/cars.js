const express = require("express");
const router = express.Router();
const cars = require("../../Cars");

// Get all vehicles
router.get("/", (req, res) => res.json(cars));

// Get one vehicle
router.get("/:id", (req, res) => {
  const found = cars.some((car) => car.id === parseInt(req.params.id));
  if (found) {
    res.json(cars.filter((car) => car.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({
      msg: `Your searched vehicle with an ID of ${req.params.id} is not in our registry`,
    });
  }
});

// Create a new vehicle
router.post("/", (req, res) => {
  const newCar = {
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    price: req.body.price,
  };
  if (!newCar.manufacturer || !newCar.model || !newCar.price) {
    return res
      .status(400)
      .json({ msg: "manufacturer, model and price needs to be included" });
  }
  cars.push(newCar);
  res.redirect("/");
});

module.exports = router;
