import express, { json} from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';
import challengeRoutes from './routes/challenge.js';
require('dotenv').config();
const app = express();
app.use(cors());
app.use(json());

// Connect to MongoDB
connectDB();
// Middleware

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/challenge', challengeRoutes);

// Serve frontend static files
app.use(express.static('frontend'));
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
