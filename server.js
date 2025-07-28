import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

//api endpoints

app.get('/', (req, res) => {
  res.send('Welcome to the Doctor Appointment System API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});