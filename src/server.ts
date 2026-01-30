import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import eventsRouter from './routes/events';

export const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/events', eventsRouter);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventstorming', {
  
  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
