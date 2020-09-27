import fs from 'fs';

const writeToFile = function (fileName, books) {
  return new Promise((resolve, reject) => {
    try {
      const recommendations = JSON.stringify(books, null, 2);
      fs.writeFile(`./files/${fileName}.txt`, recommendations, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve('Recommendations have been successfully saved.');
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

const createRecommendations = async function (req, res) {
  const { name, books } = req.body;
  if (!name || !books) {
    res.status(400);
    res.send({ mesage: 'Friend name or books missing in request.' });
  } else {
    try {
      const result = await writeToFile(name, books);
      res.status(200);
      res.send(result);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
};

export default function (app) {
  app.post('/recommendations', createRecommendations);
}
