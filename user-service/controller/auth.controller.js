import { ResponseHelper } from "../helper/response.helper.js";
import { AuthService } from "../service/auth.service.js"
import { AuthValidator } from "../validator/auth.validator.js";

// init classes
const authService = new AuthService();
const authValidator = new AuthValidator();
const responseHelper = new ResponseHelper();

export class AuthController {
    async register(req, res) {
        const { error } = authValidator.validateRegister(req.body);
        if (error) {
            return res.status(422).json(responseHelper.validationError(error.message))
        }

        return authService.register(req, res);
    }

    async login(req, res) {
        const { error } = authValidator.validateLogin(req.body);
        if (error) {
            return res.status(422).json(responseHelper.validationError(error.message))
        }
        
        return authService.login(req, res);
    }

    async whoami(req, res) {        
        return authService.whoami(req, res);
    }
}
