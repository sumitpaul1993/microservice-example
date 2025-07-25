import Joi from 'joi'

export const authRegisterValidator = function (data) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }).required()
    return schema.validate(data)
}

export const authLoginValidator = function (data) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }).required()
    return schema.validate(data)
}