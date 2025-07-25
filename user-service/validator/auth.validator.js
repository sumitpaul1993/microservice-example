import Joi from 'joi'

export class AuthValidator {
    validateRegister(data) {
        const schema = Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }).required()
        return schema.validate(data)
    }

    validateLogin(data) {        
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }).required()
        return schema.validate(data)
    }
}