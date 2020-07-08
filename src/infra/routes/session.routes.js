import { Router } from 'express';
import SessionController from '../../modules/users/controllers/SessionController';
import validateAuthentication from '../middlewares/validateAuthentication';

const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post('/', sessionController.create);

sessionRouter.use(validateAuthentication);
sessionRouter.get('/validate', sessionController.validate);

export default sessionRouter;
