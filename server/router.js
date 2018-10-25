const express = require('express');
const router = express.Router();

const controllers = require('./controllers/topic-controllers');

router
  .get('/topics', controllers.getAllTopics)
  .post('/topics', controllers.saveNewTopic)
  // .delete('/topics/:id', controllers.deleteTopic)
  // .put('/topics/:id/up', controllers.upvoteTopic)
  // .put('/topics/:id/down', controllers.downvoteTopic)
  .get('*', () => {
    this.status = 404;
    this.body = _404;
  });

module.exports = router;
