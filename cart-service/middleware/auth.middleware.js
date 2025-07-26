import { responseInternalErrorHelper, responseUnauthorizeErrorHelper } from "../helper/response.helper.js";
import { KafkaConsumerConfig } from "../../user-service/config/kafka.config.js";
import axios from 'axios'

export const AuthCheckLoginMiddleware = async function (req, res, next) {
    const authorization = req.headers?.authorization

    if (!authorization) {
        return res.status(401).json(responseUnauthorizeErrorHelper())
    }

    try {
        const response = await axios.get("http://localhost:3000/auth/validate-login", {
            headers: { Authorization: authorization }
        });
        // console.log(response.data)
    } catch {
        return res.status(401).json(responseUnauthorizeErrorHelper())
    }

    const consumer = await KafkaConsumerConfig('validate-login-group')
    await consumer.connect()
    await consumer.subscribe({
        topic: 'validate-login-topic',
        fromBeginning: false
    })
    await consumer.run({
        eachMessage: async ({ topic, message, partition }) => {
            console.log(JSON.parse(message.value.toString()))
        }
    }).catch((err) => {
        return res.status(401).json(responseInternalErrorHelper(err))
    })
    
    next()
}