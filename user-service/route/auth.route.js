import express from 'express'
import { login, register, validateLogin, whoami } from '../controller/auth.controller.js';
import { AuthCheckLoginMiddleware } from '../middleware/auth.middleware.js';

const AuthRouter = express.Router()


//define routes
AuthRouter.post('/register', register)
AuthRouter.post('/login', login)
AuthRouter.get('/whoami', AuthCheckLoginMiddleware, whoami)
AuthRouter.get('/validate-login', AuthCheckLoginMiddleware, validateLogin)

export default AuthRouter;