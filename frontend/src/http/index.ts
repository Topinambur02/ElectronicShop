import axios from "axios";

const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.SERVER_URL
});

export default $host;