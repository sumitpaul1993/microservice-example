import { responseValidationErrorHelper } from "../helper/response.helper.js";
import { loginService, registerService, validateLoginService, whoamiService } from "../service/auth.service.js";
import { authLoginValidator, authRegisterValidator } from "../validator/auth.validator.js";

export const register = async function (req, res) {
    const { error } = authRegisterValidator(req.body);
    if (error) {
        return res.status(422).json(responseValidationErrorHelper(error.message))
    }

    return registerService(req, res);
}

export const login = async function (req, res) {
    const { error } = authLoginValidator(req.body);
    if (error) {
        return res.status(422).json(responseValidationErrorHelper(error.message))
    }

    return loginService(req, res);
}

export const whoami = async function (req, res) {
    return whoamiService(req, res);
}

// used for kafka communication for other microservices
export const validateLogin = async function (req, res) {
    return validateLoginService(req, res);
}
