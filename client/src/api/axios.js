import axios from "axios";
import {getToken} from '../firebase/helpers';

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add a request interceptor
apiClient.interceptors.request.use(async config => {
    try { 
    // Do something before request is sent
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    } catch (error) {
          // Do something with request error
    return Promise.reject(error);
    }
}
);

// Add a response interceptor
// axios.interceptors.response.use(function onFulfilled(response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function onRejected(error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

export default apiClient;