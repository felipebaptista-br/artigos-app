import axios from "axios";

const api = axios.create({
    // baseURL: `${window.location.protocol}//${window.location.host}`,
    baseURL: "http://localhost:5000/article/",
});

export default api;