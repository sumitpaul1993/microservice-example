import { KafkaConsumerConfig, KafkaProducerConfig } from "../config/kafka.config.js";
import { bcryptCompareDataHelper, bcryptHashDataHelper } from "../helper/bcrypt.helper.js";
import { JWTSingTokenHelper } from "../helper/jwt.helper.js";
import { responseExceptionErrorHelper, responseInternalErrorHelper, responseSuccessHelper } from "../helper/response.helper.js";
import { authCreateNewUserRepo, authGetUserDetailsRepo } from "../repository/auth.repository.js";

export const registerService = async function (req, res) {
    const { name, email, password } = req.body;

    let checkUser;
    try {
        checkUser = await getUserDetailsRepo({ email }, { _id: 1 })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    if (checkUser) {
        return res.status(406).json(responseExceptionErrorHelper('User already registered'))
    }

    let data
    try {
        let hashPassword = await bcryptHashDataHelper(password)
        data = await authCreateNewUserRepo({
            email: email,
            name: name,
            password: hashPassword
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    return res.status(200).json(responseSuccessHelper(data))
}

export const loginService = async function (req, res) {
    const { email, password } = req.body

    let getUser;
    try {
        getUser = await authGetUserDetailsRepo({ email }, {
            _id: 1,
            password: 1,
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    if (!getUser) {
        return res.status(406).json(responseExceptionErrorHelper('Wrong credentials.'))
    }

    let comparePass
    try {
        comparePass = await bcryptCompareDataHelper(password, getUser.password)
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    if (!comparePass) {
        return res.status(406).json(responseExceptionErrorHelper('Wrong credentials.'))
    }

    let token;
    try {
        token = await JWTSingTokenHelper({ id: getUser._id })
    } catch (e) {
        console.log(e)
        return res.status(500).json(responseInternalErrorHelper(e))
    }

    return res.status(200).json(responseSuccessHelper({ token }))
}

export const whoamiService = async function (req, res) {
    return res.status(200).json(responseSuccessHelper(req.user))
}

export const validateLoginService = async function (req, res) {
    // send value in kafka
    const producer = await KafkaProducerConfig()
    await producer.send({
        topic: 'validate-login-topic',
        messages: [
            {
                value: JSON.stringify(req.user),
                key: "user"
            }
        ]
    })
    
    // await producer.disconnect();
    // await consumer.disconnect()
    return res.status(200).json(responseSuccessHelper(req.user))
}