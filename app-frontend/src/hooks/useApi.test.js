import useApi from "./useApi";

const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

let url;
let data;
let mockResponse = {
    "results": [
        {
            "gameId": 1,
            "gameResult": "Loss"
        },
        {
            "gameId": 2,
            "gameResult": "Loss"
        }
    ],
    "totalWins": 1
}
let mockJsonPromise = Promise.resolve(mockResponse);
let mockFetchPromise;

afterAll(() => {
    delete global.fetch;
});

describe("useApi", () => {
    beforeEach(() => {
        url = "http://localhost:9090/api/simulation-results";
        const data = {
            "simulationDetails": {
                "numberOfSimulations": 2,
                "chosenDoor": 'A',
                "preference": 'Keep'
            }
        };
        mockFetchPromise = Promise.resolve({
            status: 200,
            ok: true,
            json: () => mockJsonPromise,
        });

        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });

    it("should return data with a request", () => {
        const { post } = useApi();
        expect(post(url, data)).resolves.toEqual(mockResponse);
    });
});