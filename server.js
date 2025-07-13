import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";  
import adminRouter from "./routes/adminRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary(); 
//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/admin",adminRouter) //localhost:5000/api/admin/add-doctor


app.get("/", (req, res) => {
  res.send(
    "Welcome to the Doctor Appointment System API roshan bajgin from jhapa"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
