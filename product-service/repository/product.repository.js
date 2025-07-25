import ProductEntity from "../entity/product.entity.js"

export const productCreateRepo = async function (data) {
    return new Promise((resolve, reject) => {
        ProductEntity.create(data).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const productGetRepo = async function (query, select) {
    return new Promise((resolve, reject) => {
        ProductEntity.find(query).select(select).sort({ createdAt: -1 }).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}