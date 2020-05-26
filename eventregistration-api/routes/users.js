const express =require('express');
const router =express.Router();
const mongoose= require('mongoose');

const regestrationDetailsSchema= require('../models/regestration_details.schema');
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0-67xx5.mongodb.net/event_management?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

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