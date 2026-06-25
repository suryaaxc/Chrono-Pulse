import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { startDataGeneration } from './config/dataGenerator.js';
import metricRoutes from './routes/metricsRoutes.js'; // <-- 1. Import Routes

const app = express();
app.use(cors());
app.use(express.json());

// 2. Use Routes
app.use('/api/metrics', metricRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: "running", project: "Chrono-Pulse" });
});

mongoose.connect('mongodb://127.0.0.1:27017/chronoPulse')
  .then(() => {
    console.log('⚡ Database Connected');
    startDataGeneration();
  })
  .catch(err => console.log('❌ DB Error:', err));

app.listen(5000, () => console.log('🚀 Engine running on port 5000'));