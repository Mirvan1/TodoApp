const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {  validationResult } = require("express-validator");

exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const checkUser = await User.findOne({ where: { Email: req.body.Email } });
    if (checkUser)
      res
        .status(404)
        .send({ message: false, error: "User already registered" });

    const hashedPassword = await bcrypt.hash(req.body.Password, 10);
    console.log("req", req.body);
    const user = await User.create({
      Firstname: req.body.FirstName,
      Lastname: req.body.LastName,
      Email: req.body.Email,
      Password: hashedPassword,
      CreatedAt: new Date(),
    });
    res.status(201).send({ message: true, userId: user.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(process.env.SECRET_KEY)

    const user = await User.findOne({ where: { Email: req.body.Email } });
    if (user && (await bcrypt.compare(req.body.Password, user.Password))) {
      const token = jwt.sign(
        {
          userId: user.Id,
          email: user.Email,
          username: user.Firstname,
        },
        'secret',
        { expiresIn: "1h" }
      );
      res
        .status(200)
        .send({ message: "Logged in successfully", token: `Bearer ${token}` });
    } else {
      res.status(401).send({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message });
  }
};

exports.getLoggedUser = async (req, res) => {
  try {
    const headerToken = req.headers.authorization;
    if (headerToken && headerToken.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message });
  }
};
