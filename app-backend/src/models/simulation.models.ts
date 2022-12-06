export interface SimulationDetails {
    numberOfSimulations: number;
    chosenDoor: string;
    preference: string;
}

export interface SimulationResults {
    results: GameResult[];
    totalWins: number;
}

export interface GameResult {
    gameId: number;
    gameResult: string;
}
