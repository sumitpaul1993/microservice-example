import mongoose from "mongoose";
import EnvConfig from "./env.config.js";
new EnvConfig()

export default class DBConnection {
    constructor() {
        mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.DB_NAME_USER_SERVICE
        }).then(() => {
            console.log(`Db connected : ${process.env.MONGO_URL}, Db name : ${process.env.DB_NAME_USER_SERVICE}`)
        }).catch((err) => {
            console.log(`Db connection error: ${err}`);
        })
    }
}


