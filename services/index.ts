import axios from "axios";

const API_URL = {
    development: '127.0.0.1:800/api',
};

const httpClient = axios.create({
    baseURL: API_URL.development
});


export default {

};