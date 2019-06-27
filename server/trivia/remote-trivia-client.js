const fetch = require('node-fetch');

const baseUrl = 'https://opentdb.com/api.php?';

const createQuery = ({
  amount = 10,
  difficulty,
  category,
  type,
}) => {
  const am = `amount=${amount}`;
  const cat = category && category !== 'any' ? `&category=${category}` : '';
  const dif = difficulty && difficulty !== 'any' ? `&difficulty=${difficulty}` : '';
  const tp = type && type !== 'any' ? `&type=${type}` : '';
  console.log(baseUrl + am + dif + cat + tp);
  return baseUrl + am + dif + cat + tp;
};

const getQuestions = async (options = {}) => {
  const response = await fetch(createQuery(options)).then(res => res.json());
  return response.results;
};

module.exports = { getQuestions };
