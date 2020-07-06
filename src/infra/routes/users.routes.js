import { Router } from 'express';
import UsersController from '../../modules/users/controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);

export default usersRouter;
