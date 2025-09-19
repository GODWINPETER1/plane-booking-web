// axios instance ( centralized auth handling)
//  central instance sets base url and injects authorization header when token exists, use this across services so you dont repeat auth code
import axios from "axios";

const baseURL = import.meta.env.BASE_API_URL || 'http://localhost:5000/api/v1'; 


const api = axios.create({
    baseURL,
    headers: {
        'Content-Type' : 'application/json',
    } 
})

// Attach auth token from localstorage for protected routes
api.interceptors.request.use((config) => {
  const stored = localStorage.getItem("auth");
  if (stored) {
    const parsed = JSON.parse(stored);
    const token = parsed?.token;
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
export default api;
