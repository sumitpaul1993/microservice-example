export class ResponseHelper {
    validationError(data = null, message = 'Validation Error.', statusCode = 422) {
        return {
            status_code: statusCode,
            message: "Validation Error.",
            data: data
        }
    }

    exceptionError(data = null, message = 'Exception Error.', statusCode = 406) {
        return {
            status_code: statusCode,
            message: "Exception Error.",
            data: data
        }
    }

    unauthorizeError(data = null, message = 'Unauthorize.', statusCode = 401) {
        return {
            status_code: statusCode,
            message: "Unauthorize.",
            data: data
        }
    }

    internalError(data = null, message = 'Internal Error.', statusCode = 500) {
        return {
            status_code: statusCode,
            message: "Internal Error.",
            data: data
        }
    }

    success(data = null, message = 'Okay', statusCode = 200) {
        return {
            status_code: statusCode,
            message: "Okay",
            data: data
        }
    }
}