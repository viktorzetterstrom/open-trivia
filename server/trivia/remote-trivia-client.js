const fetch = require('node-fetch');

const baseUrl = 'https://opentdb.com/api.php?';

const createQuery = ({
  amount = 1,
  difficulty,
  category,
  type,
}) => {
  const am = `amount=${amount}`;
  const dif = difficulty ? `&difficulty=${difficulty}` : '';
  const cat = category ? `&difficulty=${category}` : '';
  const tp = type ? `&type=${type}` : '';
  return baseUrl + am + dif + cat + tp;
};

const getQuestions = async (options = {}) => {
  const response = await fetch(createQuery(options)).then(res => res.json());
  return response.results;
};

module.exports = { getQuestions };
