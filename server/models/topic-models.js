const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  published_at: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number,
    default: 0
  }
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
