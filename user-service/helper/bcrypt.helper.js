import bcrypt from "bcryptjs";

export const bcryptHashDataHelper = async function (data) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) reject(err);
            bcrypt.hash(data, salt, function (err1, hash) {
                if (err1) reject(err1);
                resolve(hash)
            });
        });
    })
}

export const bcryptCompareDataHelper = async function (data, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(data, hash, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    })
}