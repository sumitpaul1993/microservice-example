import { responseValidationErrorHelper } from "../helper/response.helper.js";
import { addToCartService } from "../service/cart.service.js";
import { cartAddValidator } from "../validator/cart.validator.js";

export const addToCart = async function (req, res) {
    const { error } = cartAddValidator(req.params);
    if (error) {
        return res.status(422).json(responseValidationErrorHelper(error.message))
    }
    return addToCartService(req, res);
}

