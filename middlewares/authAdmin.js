import jwt from "jsonwebtoken";

//admin authentication middleware
const authAdmin = (req, res, next) => {
  try {
    const {atoken} = req.headers;
    if(!atoken) {
      return res.json({success:false, message:"Admin token is required"});
    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
    if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({success:false, message:"Invalid admin token"});
    }

    next();
    
  } catch (error) {
     console.log(error);
     res.json({ success: false, message: "Internal server error" });
  }
}

export default authAdmin;