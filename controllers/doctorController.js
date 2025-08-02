import doctorModel from "../models/doctorModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({
      success: true,
      message: "Doctor's availability status changed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({
      success: true,
      message: "Doctor list fetched successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Api for foctor login

const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email });
    if (!doctor) {
      //if no doctor
      return res.json({ success: false, message: "Invalid credentials" });
    }
    const isMatch = await  bcrypt.compare(password, doctor.password) // compre the password we get from request(user) and password saved on database

    if(isMatch){
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
      res.json({success:true, token})
    } else {
      return res.json({ success: false, message: "Invalid credentials" });

    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { changeAvailability, doctorList, loginDoctor };
