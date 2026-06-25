import Metric from '../models/Metrics.js';

// 1. Live/Latest data fetch karne ke liye (Sabse naya 1 data point)
export const getLiveMetrics = async (req, res) => {
    try {
        const latestData = await Metric.findOne().sort({ timestamp: -1 });
        res.status(200).json(latestData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Time-Travel ke liye: Kisi specific time range ka data lane ke liye
export const getHistoricalMetrics = async (req, res) => {
    try {
        const { start, end } = req.query; // Query params se start aur end time lenge
        
        if (!start || !end) {
            return res.status(400).json({ message: "Start and End timestamps are required" });
        }

        const historyData = await Metric.find({
            timestamp: {
                $gte: new Date(start),
                $lte: new Date(end)
            }
        }).sort({ timestamp: 1 }); // Purane se naye order mein sort

        res.status(200).json(historyData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};