export const responseValidationErrorHelper = function (data = null, message = 'Validation Error.', statusCode = 422) {
    return {
        status_code: statusCode,
        message: "Validation Error.",
        data: data
    }
}

export const responseExceptionErrorHelper = function (data = null, message = 'Exception Error.', statusCode = 406) {
    return {
        status_code: statusCode,
        message: "Exception Error.",
        data: data
    }
}

export const responseUnauthorizeErrorHelper = function (data = null, message = 'Unauthorize.', statusCode = 401) {
    return {
        status_code: statusCode,
        message: "Unauthorize.",
        data: data
    }
}

export const responseInternalErrorHelper = function (data = null, message = 'Internal Error.', statusCode = 500) {
    return {
        status_code: statusCode,
        message: "Internal Error.",
        data: data
    }
}

export const responseSuccessHelper = function (data = null, message = 'Okay', statusCode = 200) {
    return {
        status_code: statusCode,
        message: "Okay",
        data: data
    }
}