import UserEntity from "../entity/user.entity.js"

export const authCreateNewUserRepo = async function (data) {
    return new Promise((resolve, reject) => {
        UserEntity.create(data).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const authGetUserDetailsRepo = async function (query, select) {
    return new Promise(async (resolve, reject) => {
        UserEntity.findOne(query).select(select).then((data) => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}