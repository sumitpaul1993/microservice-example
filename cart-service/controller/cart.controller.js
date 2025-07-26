import { responseValidationErrorHelper } from "../helper/response.helper.js";
import { addToCartService, removeFromCartService } from "../service/cart.service.js";
import { cartProductIdValidator } from "../validator/cart.validator.js";

export const addToCart = async function (req, res) {
    const { error } = cartProductIdValidator(req.params);
    if (error) {
        return res.status(422).json(responseValidationErrorHelper(error.message))
    }
    return addToCartService(req, res);
}

export const removeFromCart = async function (req, res) {
    const { error } = cartProductIdValidator(req.params);
    if (error) {
        return res.status(422).json(responseValidationErrorHelper(error.message))
    }
    return removeFromCartService(req, res);
}

