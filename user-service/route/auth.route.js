import express from 'express'
import { login, register, whoami } from '../controller/auth.controller.js';
import { AuthCheckLoginMiddleware } from '../middleware/auth.middleware.js';

const AuthRouter = express.Router()


//define routes
AuthRouter.post('/register', register)
AuthRouter.post('/login', login)
AuthRouter.get('/whoami', AuthCheckLoginMiddleware, whoami)

export default AuthRouter;