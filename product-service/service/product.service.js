import { responseInternalErrorHelper, responseSuccessHelper } from "../helper/response.helper.js";
import { productCreateRepo, productGetRepo } from "../repository/product.repository.js";

export const createProductService = async function (req, res) {
    const { name, description } = req.body;

    let data
    try {
        data = await productCreateRepo({
            name: name,
            description: description
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }
    return res.status(200).json(responseSuccessHelper(data))
}

export const getProductsService = async function (req, res) {
    let data
    try {
        data = await productGetRepo({},{})
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }
    return res.status(200).json(responseSuccessHelper(data))
}