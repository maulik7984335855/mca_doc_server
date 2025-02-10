import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import subjectRouter from './routes/subject.js'
import userRouter from './routes/user.js'

const app = express();
dotenv.config();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json())

app.use('/api/subject',subjectRouter)
app.use('/api/user',userRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB CONNECTD"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
