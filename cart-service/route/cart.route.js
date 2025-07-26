import express from 'express'
import { addToCart } from '../controller/cart.controller.js';

const CartRouter = express.Router()


//define routes
CartRouter.post('/:productId', addToCart)

export default CartRouter;