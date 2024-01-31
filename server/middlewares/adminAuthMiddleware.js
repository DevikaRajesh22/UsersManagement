const jwt=require('jsonwebtoken');
const asynchandler=require('express-async-handler');
const Admin=require('../models/adminModel');

const protect=asynchandler(async(req,res,next)=>{
    let token;
    token=req.cookies.admin;
    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await Admin.findById(decoded.adminId).select('-paasword');
            next();
        }catch(error){
            res.send(401);
            throw new Error("not authorized, no token");
        }
    }else{
        res.status(401);
        throw new Error("not authorized, no token")
    }
});

module.exports= {protect};