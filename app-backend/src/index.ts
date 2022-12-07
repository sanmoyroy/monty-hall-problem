import express, { Express } from 'express';
import { simulationRouter } from './routes/simulation.router'
import cors from 'cors';

const app: Express = express();
const port = 9090

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

app.use(express.json());
app.use(simulationRouter);

app.listen(port, () => {
  console.log(`Monty Hall simulator listening on port ${port}`)
})