export let createRecommendations = function(req, res) {
  res.status(200);
  res.send('Hello World!');
};

export default function (app) {
  app.get('/recommendations', createRecommendations);
}
