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

export const cartFindOneRepo = async function (query, select) {
    return new Promise((resolve, reject) => {
        CartEntity.findOne(query).select(select).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const cartDeleteRepo = async function (query) {
    return new Promise((resolve, reject) => {
        CartEntity.deleteMany(query).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}
