import UserEntity from "../entity/user.entity.js"

export class AuthRepository {
    async createNewUser(data) {
        return new Promise((resolve, reject) => {
            UserEntity.create(data).then((data) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })
    }

    async getUserDetails(query, select) {
        return new Promise(async (resolve, reject) => {
            UserEntity.findOne(query).select(select).then((data) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}