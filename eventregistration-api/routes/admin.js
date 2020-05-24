const adminSchema = require("../models/admin.schema");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-67xx5.mongodb.net/event_management?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
router.post("/signup", async (req, res) => {
  let admin = await adminSchema.findOne({ email: req.body.email }, function (
    error,
    result
  ) {
    if (error) {
      throw error;
    }
  });
  if (admin) {
    return res.send(`user already exist ${admin}`);
  } else {
    admin = new adminSchema();
    admin.email = req.body.email;
    admin.password = admin.generateHash(req.body.password);

    await admin.save(function (error) {
      if (error) {
        throw error;
      } else {
        res.send(admin);
      }
    });
  }
});
router.post("/login", (req, res) => {
  //admin = new adminSchema();
  console.log(req.body);
  //const uemail="\'"+req.body.email+"\'"
  console.log(req.body.email);

  let adminpresent = adminSchema
    .findOne({ email: req.body.email }, function (error, result) {
      if (error) {
        throw error;
      } else console.log(result);
    })
    .then(function (admin) {
      if (!admin) {
        return res.send("no user");
      } else {
        console.log(admin);
        bcrypt.compare(req.body.password, admin.password, function (
          err,
          result
        ) {
          if (result === true) {
            //req.session.userId = uid();
            //res.render("user/login", { title: "Login" });
            return res.send(`logged in`);
          } else {
            return res.send("incorrect password");
          }
        });
      }
    });
});
module.exports = router;
