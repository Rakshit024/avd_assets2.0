// import axios from "axios";
// const api_utils = axios.create({
//   // baseURL: "/api/v1",
//   baseURL: "http://27.116.52.24:8054/"
// });

// export default api_utils;
import axios from "axios";

const localApiUrl = "http://27.116.52.24:8054/"

const login = `${localApiUrl}login`;
const getProducts = `${localApiUrl}getProducts`;

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_AUTH_TOKEN'
};

const callAxiosApi = async (url = "", body = {}, responseType = 'json') => {
    const data = JSON.stringify(body);

    const config = {
        method: 'post',
        url,
        headers,
        data,
        responseType
    };

    try {
        const response = await axios.request(config);
        return response;
    } catch (error) {
        return error;
    }
};

export {login, callAxiosApi, getProducts}