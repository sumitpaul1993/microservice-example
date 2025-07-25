import jwt from 'jsonwebtoken'
export class JWTHelper {
    singToken(data, expIn = '1h') {
        return new Promise((resolve, reject) => {
            jwt.sign(data, process.env.JWT_SECRET, { expiresIn: expIn }, (err, data) => {
                if (err) reject(err);
                resolve(data)
            })
        })
    }

    decodeToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
                if (err) reject(err);
                resolve(data)
            })
        })
    }
}