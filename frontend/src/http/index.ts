import axios from "axios";

const $host = axios.create({
    withCredentials: true,
    baseURL: "http://45.132.19.72/api/"
});

export default $host;