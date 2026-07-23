import axios from "axios";

const API = axios.create({
    baseURL: "https://ai-sports-quiz-generator-production.up.railway.app",
});

export default API;