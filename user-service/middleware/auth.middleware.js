import mongoose from "mongoose";
import { JWTHelper } from "../helper/jwt.helper.js";
import { ResponseHelper } from "../helper/response.helper.js";
import { AuthRepository } from "../repository/auth.repository.js";

// init classes
const AuthRepo = new AuthRepository();
const jwtHelper = new JWTHelper();
const responseHelper = new ResponseHelper();

export class AuthMiddleware {
    async checkLogin(req, res, next) {
        const authorization = req.headers?.authorization

        if (!authorization) {
            return res.status(401).json(responseHelper.unauthorizeError())
        }

        let token = authorization.split(" ")[1];

        let decode;
        try {
            decode = await jwtHelper.decodeToken(token)
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }

        if (!decode) {
            return res.status(401).json(responseHelper.unauthorizeError())
        }

        let user
        try {
            user = await AuthRepo.getUserDetails({ _id: new mongoose.Types.ObjectId(decode.id) }, {
                _id: 1,
                name: 1,
                email: 1,
                createdAt: 1
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }
        req.user = user
        next()
    }
}