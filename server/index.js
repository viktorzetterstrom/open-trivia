const express = require('express');
const { triviaService, triviaOptions } = require('./trivia');

const app = express();
const port = 8080;

app.get('/api/questions', async (req, res) => {
  const questions = await triviaService.getQuestions({});
  res.json(questions);
});

app.get('/api/options', (req, res) => {
  res.json(triviaOptions);
});

app.listen(port);
