import express from 'express'
import { addToCart, removeFromCart } from '../controller/cart.controller.js';

const CartRouter = express.Router()


//define routes
CartRouter.post('/:productId', addToCart)
CartRouter.delete('/:productId', removeFromCart)

export default CartRouter;