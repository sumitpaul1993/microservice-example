import Joi from 'joi'

export const productCreateValidator = function (data) {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    }).required()
    return schema.validate(data)
}