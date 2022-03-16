import axios from "axios";


export const privateRequest = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// privateRequest.interceptors.request.use(config => {
//    return config.headers.common.Authorization = `${token}`;
// })