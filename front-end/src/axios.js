import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/Back_End_war/'

})
export default instance;