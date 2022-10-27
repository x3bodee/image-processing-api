import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import resize from './routes/resize/resize.route';

const app = express();

const { PORT } = process.env;

app.use('/resize', resize);

app.listen(PORT, () => {
  console.log(`app running on port: ${PORT}`);
});

export default app;
