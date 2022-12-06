export class SimulationService {

    public static getRandomIndexOfArray(arr: string[]): number {
        return Math.floor(Math.random() * arr.length);
    }

}
