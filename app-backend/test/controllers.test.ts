import { SimulationController } from '../src/controllers/simulation.controller';
import { SimulationResults } from '../src/models/simulation.models';

const simulations = {
    "simulationDetails": {
        "numberOfSimulations": 10,
        "chosenDoor": "A",
        "preference": "Keep"
    }
}

describe('Controller tests', () => {
    test('number of game results should equal number of simulations', () => {
        const simulationResults: SimulationResults = SimulationController.getSimulationResults(simulations.simulationDetails);
        expect(simulationResults.results.length).toEqual(simulations.simulationDetails.numberOfSimulations);
    });

    test('gameId of first game should be equal to 1', () => {
        const simulationResults: SimulationResults = SimulationController.getSimulationResults(simulations.simulationDetails);
        expect(simulationResults.results[0].gameId).toEqual(1);
    });

    test('gameResult for all games should be either Win Or Loss', () => {
        const possibleGameResults = ['Win', 'Loss'];
        const simulationResults: SimulationResults = SimulationController.getSimulationResults(simulations.simulationDetails);
        simulationResults.results.forEach(result => {
            expect(possibleGameResults).toContain(result.gameResult);           
        });
    });

    test('totalWins should be greater than or equal to 0', () => {
        const simulationResults: SimulationResults = SimulationController.getSimulationResults(simulations.simulationDetails);
        expect(simulationResults.totalWins).toBeGreaterThanOrEqual(0);
    });

    test('totalWins should be lesser than or equal to the number of simulations', () => {
        const simulationResults: SimulationResults = SimulationController.getSimulationResults(simulations.simulationDetails);
        expect(simulationResults.totalWins).toBeLessThanOrEqual(simulations.simulationDetails.numberOfSimulations);
    });
});