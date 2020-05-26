const express =require('express');
const router =express.Router();
const mongoose= require('mongoose');
// const userSchema = require("../models/user.schema");

// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-67xx5.mongodb.net/event_management?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// let storages = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storages }).single("file");

// router.post("", (req, res) => {
//   //console.log(req,'file')
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       return res.sendStatus(500).json(err);
//     } else if (err) {
//       return res.sendStatus(500).json(err);
//     } else {
//       userSchema.save(
//         {
//           user_id: req.body.user_id,
//           user_name: req.body.user_name,
//           user_contact_no: req.body.user_contact_no,
//           user_email: req.body.user_email,
//           no_of_tickets: req.no_of_tickets,
//           user_image: req.image.filename,
//         },
//         function (err, result) {
//           if (err) {
//             throw err;
//           } else {
//             console.log(result);
//             res.status(200).send("inserted");
//           }
//         }
//       );
//     }
//   });
// });

const regestrationDetailsSchema= require('../models/regestration_details.schema');


router.post("/apply", async (req,res)=>{
    let user= new regestrationDetailsSchema();
    user.full_name= req.body.full_name;
    user.email_id= req.body.email_id;
    // user.phone_no= req.body.phone_no;
    user.id_image= req.body.id_image;
    user.regestration_type= req.body.regestration_type;
    // user.no_tickets= req.body.no_tickets;
    await user.save(error =>{
        if(error){
            throw error;
        }else{
            res.status(200).json({
                status:"Success"
            })
        }
    })
})
module.exports= router;