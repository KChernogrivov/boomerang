import axios from "axios";

axios.defaults.baseURL = process.env.EXPO_PUBLIC_API_URL;
axios.defaults.timeout = 2500;

type request = {
    method: 'POST' | 'GET',
    url: string,
    body?: Object,
}


export default function callApi({method, url, body}: request) {
    return axios({
        method,
        url,
        data: body
    });
}
