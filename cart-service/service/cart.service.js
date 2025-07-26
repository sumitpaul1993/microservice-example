import mongoose from "mongoose";
import { responseExceptionErrorHelper, responseInternalErrorHelper, responseSuccessHelper } from "../helper/response.helper.js";
import { cartAddRepo, cartDeleteRepo, cartFindOneRepo } from "../repository/cart.repository.js";

export const addToCartService = async function (req, res) {
    const { productId } = req.params

    let checkExist
    try {
        checkExist = await cartFindOneRepo({
            product_id: new mongoose.Types.ObjectId(productId),
            user_id: new mongoose.Types.ObjectId(productId)
        }, { _id: true })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    if (checkExist) {
        return res.status(406).json(responseExceptionErrorHelper('Product already exist to cart'));
    }

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

export const removeFromCartService = async function (req, res) {
    const { productId } = req.params
    try {
        await cartDeleteRepo({
            product_id: new mongoose.Types.ObjectId(productId),
            user_id: new mongoose.Types.ObjectId(productId)
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }
    return res.status(200).json(responseSuccessHelper('Product removed from cart'));
}