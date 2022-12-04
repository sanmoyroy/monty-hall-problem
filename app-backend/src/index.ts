import express, { Express, Request, Response } from 'express';
import { Simulation } from './simulation';

const app: Express = express();
app.use(express.json());
const port = 9090

app.get('/simulation-results', (req: Request, res: Response) => {
    const results = Simulation.getSimulationResults(req.body.simulationDetails);
    res.send(results);
})

app.listen(port, () => {
  console.log(`Monty Hall simulator listening on port ${port}`)
})