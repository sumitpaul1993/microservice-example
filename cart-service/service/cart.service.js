import mongoose from "mongoose";
import { responseInternalErrorHelper, responseSuccessHelper } from "../helper/response.helper.js";
import { cartAddRepo } from "../repository/cart.repository.js";

export const addToCartService = async function (req, res) {
    const { productId } = req.params
    try {
        await cartAddRepo({
            product_id: new mongoose.Types.ObjectId(productId),
            user_id: new mongoose.Types.ObjectId(productId)
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }
    return res.status(200).json(responseSuccessHelper('Product added to cart'));
}