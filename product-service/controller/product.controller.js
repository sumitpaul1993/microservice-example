import { responseValidationErrorHelper } from "../helper/response.helper.js";
import { createProductService, getProductsService } from "../service/product.service.js";
import { productCreateValidator } from "../validator/product.validator.js";

export const createProduct = async function (req, res) {
    const { error } = productCreateValidator(req.body);
    if (error) {
        return res.status(422).json(responseValidationErrorHelper(error.message))
    }

    return createProductService(req, res);
}

export const getProducts = async function (req, res) {
    return getProductsService(req, res);
}