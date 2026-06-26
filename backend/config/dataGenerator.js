import Metric from '../models/Metrics.js';

// Random number generator helper 
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const severities = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
const attackLogs = [
  "DDOS attempt mitigated from IP 192.168.1.50",
  "SQL Injection blocked on endpoint /api/auth",
  "Brute force detected on admin panel",
  "Suspicious API payload dropped from regional gateway"
];

export const startDataGeneration = () => {
  console.log("📈 Temporal Data Stream Generator Started...");

  setInterval(async () => {
    try {
      const newMetric = new Metric({
        timestamp: new Date(),
        serverLoad: {
          usEast: getRandom(20, 95),
          euWest: getRandom(15, 85),
          asiaEast: getRandom(30, 99)
        },
        techTrends: {
          react: getRandom(70, 95),
          nextjs: getRandom(50, 85),
          python: getRandom(60, 90),
          rust: getRandom(30, 75)
        },
        securityAlerts: {
          attackCount: getRandom(0, 15),
          severity: severities[getRandom(0, 3)],
          recentLog: attackLogs[getRandom(0, 3)]
        },
        hiringIndex: {
          remoteJobs: getRandom(1200, 5000),
          marketSentiment: getRandom(40, 95)
        }
      });

      await newMetric.save();
      console.log(`✨ Metric Data Streamed: ${new Date().toLocaleTimeString()}`);
    } catch (err) {
      console.error("❌ Generator Error:", err.message);
    }
  }, 5000); // Har 5 second mein data push hoga
};