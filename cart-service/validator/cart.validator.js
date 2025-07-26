import Joi from 'joi'

export const cartAddValidator = function (data) {
    const schema = Joi.object({
        productId: Joi.string().required()
    }).required()
    return schema.validate(data)
}