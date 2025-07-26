import express from 'express'
import { addToCart, removeFromCart } from '../controller/cart.controller.js';
import { AuthCheckLoginMiddleware } from '../middleware/auth.middleware.js';

const CartRouter = express.Router()


//define routes
CartRouter.post('/:productId', AuthCheckLoginMiddleware, addToCart)
CartRouter.delete('/:productId', removeFromCart)

export default CartRouter;