import axios from "axios";

export const axiosGet = (dispatch, url, responseHandler) => {
    return axiosGetWithParams(dispatch, url, {}, responseHandler)
}

export const axiosGetWithParams = (dispatch, url, params, responseHandler) => {
    return axios
        .get(url, { params })
        .then((response) => {
            return responseHandler(response)
        })
        .catch((error) => {
            throw error;
        });
}

export const axiosPost = (dispatch, url, data, responseHandler) => {
    return axios
        .post(url, data)
        .then((response) => {
            return responseHandler(response)
        })
        .catch((error) => {
            throw error;
        });
}
