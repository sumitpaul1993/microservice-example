import CartEntity from "../entity/cart.entity.js"

export const cartAddRepo = async function (data) {
    return new Promise((resolve, reject) => {
        CartEntity.create(data).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}
