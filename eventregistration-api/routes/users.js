const userSchema = require("../models/user.schema");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-67xx5.mongodb.net/event_management?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
let storages = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storages }).single("file");

router.post("/", (req, res) => {
  //console.log(req,'file')
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.sendStatus(500).json(err);
    } else if (err) {
      return res.sendStatus(500).json(err);
    } else {
      userSchema.save(
        {
          user_id: req.body.user_id,
          user_name: req.body.user_name,
          user_contact_no: req.body.user_contact_no,
          user_email: req.body.user_email,
          no_of_tickets: req.no_of_tickets,
          user_image: req.image.filename,
        },
        function (err, result) {
          if (err) {
            throw err;
          } else {
            console.log(result);
            res.status(200).send("inserted");
          }
        }
      );
    }
  });
});
module.exports = router;
