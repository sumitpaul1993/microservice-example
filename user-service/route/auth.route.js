import express from 'express'
import { AuthController } from '../controller/auth.controller.js';
import { AuthMiddleware } from '../middleware/auth.middleware.js';

const AuthRouter = express.Router()

// handler
const AuthHandler = new AuthController();

//middleware
const authMiddleware = new AuthMiddleware()

//define routes
AuthRouter.post('/register', AuthHandler.register)
AuthRouter.post('/login', AuthHandler.login)
AuthRouter.get('/whoami', authMiddleware.checkLogin, AuthHandler.whoami)

export default AuthRouter;