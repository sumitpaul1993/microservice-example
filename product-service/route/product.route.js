import express from 'express'
import { createProduct, getProducts } from '../controller/product.controller.js';

const ProductRouter = express.Router()


//define routes
ProductRouter.post('/', createProduct)
ProductRouter.get('/', getProducts)

export default ProductRouter;