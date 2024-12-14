import axios from "axios";

export const $api = axios.create({
    baseURL: "http://85.192.49.26:8080/"
})

