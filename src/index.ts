import express, { Request, Response, NextFunction } from 'express';
import resize from './routes/resize/resize.route';

const app = express();
const PORT = 5001;
app.use('/resize', resize);

app.listen(PORT, () => {
  console.log(`app running on port: 5000`);
});
