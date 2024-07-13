import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import udhaarRoute from './route/udhaar.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

app.use('/udhaar', udhaarRoute);
app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
