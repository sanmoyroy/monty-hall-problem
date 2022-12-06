import express, { Router, Request, Response } from 'express';
import { SimulationController } from '../controllers/simulation.controller';
import { body, CustomValidator, validationResult } from 'express-validator';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../../swagger.json';

const router: Router = express.Router();

const VALID_SIMULATION_MESSAGE = 'Number of Simulations should be between 1 and 100 (inclusive)';
const VALID_CHOSEN_DOOR_MESSAGE = 'Chosen Door should be either A, B or C (case insensitive)';
const VALID_PREFERENCE_MESSAGE = 'Preference should be either Keep or Change (case insensitive)';

const isValidSimulationCount: CustomValidator = value => {
    return value >= 1 && value <= 100;
};

router.post('/api/simulation-results',
    body('simulationDetails.numberOfSimulations').exists({ checkNull: true }).custom(isValidSimulationCount).withMessage(VALID_SIMULATION_MESSAGE),
    body('simulationDetails.chosenDoor').exists({ checkNull: true }).toLowerCase().isIn(['a', 'b', 'c']).withMessage(VALID_CHOSEN_DOOR_MESSAGE),
    body('simulationDetails.preference').exists({ checkNull: true }).toLowerCase().isIn(['keep', 'change']).withMessage(VALID_PREFERENCE_MESSAGE),
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const results = SimulationController.getSimulationResults(req.body.simulationDetails);
        res.status(201).send(results);
    })

router.use('/api/swagger', swaggerUi.serve);
router.get('/api/swagger', swaggerUi.setup(swaggerDocument));

export const simulationRouter: Router = router;
