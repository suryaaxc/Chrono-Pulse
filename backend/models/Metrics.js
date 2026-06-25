import mongoose from 'mongoose';

const metricsSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now, index: true },
  
  // 1. Server Load Data
  serverLoad: {
    usEast: Number,
    euWest: Number,
    asiaEast: Number
  },

  // 2. Tech Stack Popularity (GitHub commits/activity index)
  techTrends: {
    react: Number,
    nextjs: Number,
    python: Number,
    rust: Number
  },

  // 3. Cyber Threat Alerts
  securityAlerts: {
    attackCount: Number,
    severity: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'] },
    recentLog: String
  },

  // 4. Global Hiring Index
  hiringIndex: {
    remoteJobs: Number,
    marketSentiment: Number // 0 to 100 scale
  }
});

export default mongoose.model('Metric', metricsSchema);