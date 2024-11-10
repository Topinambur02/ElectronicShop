import axios from "axios";

const $host = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api'
});

export default $host;