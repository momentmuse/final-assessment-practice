const Topic = require('./../models/topic-models');

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).send(topics);
  } catch (e) {
    res.status = 500;
    console.error('Could not fetch messages! 😱');
  }
};

exports.saveNewTopic = async (req, res) => {
  try {
    const { title } = req.body;
    const newTopic = await new Topic({ title }).save();
    res.status(200).send(newTopic);
  } catch (e) {
    res.status = 500;
    console.error('Could not save message! 😭', e);
  }
};
