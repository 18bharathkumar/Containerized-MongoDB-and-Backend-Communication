import express from "express";
import User from "./db.js";
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// function to connect to the database

const connectDB = async () => {
    try {
      // here we are connecting to mymongo conatiner of port 27017 (so there is no need of port mapping also)
      await mongoose.connect('mongodb://mymongo//:27017/myDatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit the process if the connection fails
    }
  };

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
  }
});

app.post("/add", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newuser = new User({
      username,
      password,
    });
    await newuser.save();

    res.status(201).json({mssg:"new user added succesfully"})

  } catch(err) {

    console.log(err);

    res.status(500).json({mssg:"internal server error"})

  }
});

connectDB()
.then(()=>{
    app.listen(3000, () => {
        console.log("listioning on port 3000");
      });
})



