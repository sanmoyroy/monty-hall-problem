import express, { Express } from 'express';
import { simulationRouter } from './routes/simulation.router'

const app: Express = express();
const port = 9090
app.use(express.json());
app.use(simulationRouter);

app.listen(port, () => {
  console.log(`Monty Hall simulator listening on port ${port}`)
})