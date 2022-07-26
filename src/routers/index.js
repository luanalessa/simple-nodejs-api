import { createUserHandler, getUsersHandler } from '../controllers/user.controller.js';
import validateRequest from '../middlewares/validateRequest.js';
import { createUserSchema } from '../schemas/user.schema.js';

export default function router(app){
    app.get('/healthcheck', (req, res) => { res.send("Success!"); });

    app.post('/user', createUserHandler);
    app.get('/users', getUsersHandler);

}