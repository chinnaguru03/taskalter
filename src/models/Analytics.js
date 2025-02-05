const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  urlId: { type: mongoose.Schema.Types.ObjectId, ref: 'Url' },
  timestamp: { type: Date, default: Date.now },
  ip: { type: String },
  userAgent: { type: String },
  os: { type: String },
  device: { type: String },
  location: { type: String }
});

module.exports = mongoose.model('Analytics', analyticsSchema);