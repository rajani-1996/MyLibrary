const express=require("express");
const registerRouter=express.Router();
const nav =  require("./nav");
const Userdata = require('../model/usermodel');

registerRouter.get("/",function(req,res){
    res.render("register",{nav})
});


registerRouter.get("/add",function(req,res){
    res.render("index",{nav})
});

registerRouter.post('/add',function(req,res){
        
        
    // res.send("hi")
    var item =
    {
       
       
       email: req.body.email,
      password: req.body.password

     
    }
    var user = Userdata(item);
    user.save();
    res.redirect('/login');


});



module.exports=registerRouter;
