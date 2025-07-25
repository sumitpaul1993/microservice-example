import mongoose from "mongoose";
import { JWTDecodeTokenHelper } from "../helper/jwt.helper.js";
import { responseInternalErrorHelper, responseUnauthorizeErrorHelper } from "../helper/response.helper.js";
import { authGetUserDetailsRepo } from "../repository/auth.repository.js";

export const AuthCheckLoginMiddleware = async function (req, res, next) {
    const authorization = req.headers?.authorization

    if (!authorization) {
        return res.status(401).json(responseUnauthorizeErrorHelper())
    }

    let token = authorization.split(" ")[1];

    let decode;
    try {
        decode = await JWTDecodeTokenHelper(token)
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    if (!decode) {
        return res.status(401).json(responseUnauthorizeErrorHelper())
    }

    let user
    try {
        user = await authGetUserDetailsRepo({ _id: new mongoose.Types.ObjectId(decode.id) }, {
            _id: 1,
            name: 1,
            email: 1,
            createdAt: 1
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }
    req.user = user
    next()
}