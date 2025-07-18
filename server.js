import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";  // Import the connectDB function

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
//middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Doctor Appointment System API roshan bajgin from jhapa"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
