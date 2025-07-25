import { BcryptHelper } from "../helper/bcrypt.helper.js";
import { JWTHelper } from "../helper/jwt.helper.js";
import { ResponseHelper } from "../helper/response.helper.js";
import { AuthRepository } from "../repository/auth.repository.js"

// init classes
const AuthRepo = new AuthRepository();
const responseHelper = new ResponseHelper();
const bcryptHelper = new BcryptHelper()
const jwtHelper = new JWTHelper()

export class AuthService {
    async register(req, res) {
        const { name, email, password } = req.body;

        let checkUser;
        try {
            checkUser = await AuthRepo.getUserDetails({ email }, { _id: 1 })
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }

        if (checkUser) {
            return res.status(406).json(responseHelper.exceptionError('User already registered'))
        }

        let data
        try {
            let hashPassword = await bcryptHelper.hashData(password)
            data = await AuthRepo.createNewUser({
                email: email,
                name: name,
                password: hashPassword
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }

        return res.status(200).json(responseHelper.success(data))
    }

    async login(req, res) {
        const { email, password } = req.body

        let getUser;
        try {
            getUser = await AuthRepo.getUserDetails({ email }, {
                _id: 1,
                password: 1,
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }

        if (!getUser) {
            return res.status(406).json(responseHelper.exceptionError('Wrong credentials.'))
        }

        let comparePass
        try {
            comparePass = await bcryptHelper.compareData(password, getUser.password)
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }

        if (!comparePass) {
            return res.status(406).json(responseHelper.exceptionError('Wrong credentials.'))
        }

        let token;
        try {
            token = await jwtHelper.singToken({ id: getUser._id })
        } catch (e) {
            console.log(e)
            return res.status(500).json(responseHelper.internalError(e))
        }

        return res.status(200).json(responseHelper.success({ token }))
    }

    async whoami(req, res) {
        return res.status(200).json(responseHelper.success(req.user))
    }
}