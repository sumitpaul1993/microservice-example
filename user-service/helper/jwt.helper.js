import jwt from 'jsonwebtoken'

export const JWTSingTokenHelper = async function (data, expIn = '1h') {
    return new Promise((resolve, reject) => {
        jwt.sign(data, process.env.JWT_SECRET, { expiresIn: expIn }, (err, data) => {
            if (err) reject(err);
            resolve(data)
        })
    })
}

export const JWTDecodeTokenHelper = async function (token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if (err) reject(err);
            resolve(data)
        })
    })
}