const cars = require('../models/car');


/*  functin save car */
exports.markCar = async (req, res) => {
  try {
    const { Mark } = req.body;
    const car = await cars.findOne({ Mark });
    if (!car) {

      const newCar = new users({ Mark, Model, color, photo });
      await newCar.save();
      res.json("successful");
    }
    else {
      res.json("ko");
    }
  } catch (err) {
    res.send(err);
  }
};
