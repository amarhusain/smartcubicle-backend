import { Router } from "express";
import StateController from "../controllers/state.controller";

const stateRouter = Router();

stateRouter.post('/create-state', StateController.createState);
stateRouter.get('/getstate/:id', StateController.getStateById);

export default stateRouter;