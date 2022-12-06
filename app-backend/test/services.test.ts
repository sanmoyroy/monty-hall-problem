import { SimulationService } from '../src/services/simulation.service';

describe('Services tests', () => {
    test('random index for an array of 3 items is 0, 1 or 2', () => {
        const input = ['A', 'B', 'C'];
        const randomIndexList = [0, 1, 2];
        const randomIndex = SimulationService.getRandomIndexOfArray(input);
        expect(randomIndexList).toContain(randomIndex);
    });
});