import express from 'express';
import cors from 'cors';
import recommendations from './controllers/recommendations';

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:8080'
}

app.use(cors(corsOptions));

recommendations(app);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});