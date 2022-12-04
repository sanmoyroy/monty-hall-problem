import { GameResult, SimulationDetails, SimulationResults } from "./models";

export class Simulation {

    public static readonly DOORS = ['a', 'b', 'c'];
    public static totalWins: number;
    public static gameResults: GameResult[];

    public static getSimulationResults(simulationDetails: SimulationDetails): SimulationResults {
        const numberOfSimulations = simulationDetails.numberOfSimulations;
        const chosenDoor = simulationDetails.chosenDoor.toLowerCase();
        const preference = simulationDetails.preference.toLowerCase();
        this.gameResults = [];
        this.totalWins = 0;
        for (let i = 0; i < numberOfSimulations; i++) {
            const isWinning = this.isWinningGame(chosenDoor, preference);
            this.gameResults.push({ gameId: i + 1, gameResult: isWinning ? 'Win' : 'Loss' });
        }

        const simulationResults: SimulationResults = {
            results: this.gameResults,
            totalWins: this.totalWins
        }

        return simulationResults;
    }

    private static isWinningGame(chosenDoor: string, preference: string): boolean {
        let doorsAvailableToBeOpened = ['a', 'b', 'c'];
        let unchosenDoors = ['a', 'b', 'c'];

        // Randomly decide a winning door
        const winningDoor = this.DOORS[this.getRandomIndexOfArray(this.DOORS)];

        // Remove the chosen door from unchosenDoors array, since the player has chosen it
        unchosenDoors = unchosenDoors.filter(door => door !== chosenDoor);
        // Remove the winning door from the available doors to be opened next - the host never opens the winning door
        doorsAvailableToBeOpened = doorsAvailableToBeOpened.filter(door => door !== winningDoor);

        // If the door the player has chosen in the beginning is not the winning door, then remove that door as well from the available doors to be opened next (since the host never opens the user's chosen door) 
        if (winningDoor !== chosenDoor) {
            doorsAvailableToBeOpened = doorsAvailableToBeOpened.filter(door => door !== chosenDoor);
        }

        // The door that the host opens - a choice from the doorsAvailableToBeOpened
        const doorToOpen = doorsAvailableToBeOpened[this.getRandomIndexOfArray(doorsAvailableToBeOpened)];

        // Remove the opened door from the unchosenDoors array. It is left with just 1 door now
        unchosenDoors = unchosenDoors.filter(door => door !== doorToOpen);

        if (preference === 'keep') {
            if (chosenDoor === winningDoor) {
                this.totalWins += 1;
                return true;
            }
        }
        if (preference === 'change') {
            if (unchosenDoors[0] === winningDoor) {
                this.totalWins += 1;
                return true;
            }
        }
        return false;
    }

    private static getRandomIndexOfArray(arr: string[]): number {
        return Math.floor(Math.random() * arr.length);
    }
}
