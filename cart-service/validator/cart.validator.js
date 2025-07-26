import Joi from 'joi'

export const cartProductIdValidator = function (data) {
    const schema = Joi.object({
        productId: Joi.string().required()
    }).required()
    return schema.validate(data)
}