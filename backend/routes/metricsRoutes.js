import express from 'express';
import { getLiveMetrics, getHistoricalMetrics } from '../controllers/metricsController.js';

const router = express.Router();

router.get('/live', getLiveMetrics);
router.get('/history', getHistoricalMetrics);

export default router;