const users = require('../models/user');


/* function save user */
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) {

      const newUser = new users({ name, email, password });
      await newUser.save();
      res.json("successful");
    }
    else {
      res.json("ko");
    }
  } catch (err) {
    res.send(err);
  }
};


/* function find user by email */
exports.loginUser = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Password incorrect");
      }
    } else {
      res.json("Record does not exist");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}